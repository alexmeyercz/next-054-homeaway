'use server'

import { profileSchema } from '@/utils/schemas'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server'

const f = '⇒ actions.ts:'

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
    console.log(f, 'error →', error)
    return {
      message: error instanceof Error ? error.message : 'An error occurred',
    }
  }
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
