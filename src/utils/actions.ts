'use server'

import { profileSchema } from '@/utils/schemas'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server'
import { paths } from './paths'

const f = '⇒ actions.ts:'

const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) {
    throw new Error('Use must be logged in to to access this route.')
  }
  if (!user.privateMetadata.hasProfile) {
    redirect(paths.profileCreate())
  }
  return user
}

const renderError = (error: unknown): { message: string } => {
  console.log(f, 'error -> ', error)
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  }
}

export const createProfileAction = async (
  prevState: any,
  formData: FormData,
) => {
  try {
    const user = await currentUser()
    if (!user) throw new Error('user not found')

    console.log(f, 'user →', user)
    const rawData = Object.fromEntries(formData)
    const validatedFields = profileSchema.parse(rawData)
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields,
      },
    })
    // Update user metadata
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: { hasProfile: true },
    })
    return { message: 'profile created' }
  } catch (error) {
    return renderError(error)
  }
}

export const updateProfileAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAuthUser()

  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = profileSchema.parse(rawData)
    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    })
    revalidatePath(paths.profile())
    return { message: 'profile updated successfully' }
  } catch (error) {
    return renderError(error)
  }
  // placeholder action
  return { message: 'update profile action' }
}

export const fetchProfileImage = async () => {
  const user = await currentUser()
  if (!user) return null
  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
    select: {
      profileImage: true,
    },
  })
  return profile?.profileImage
}

export const fetchProfile = async () => {
  const user = await getAuthUser()
  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
  })
  if (!profile) {
    redirect(paths.profileCreate())
  }
  return profile
}
