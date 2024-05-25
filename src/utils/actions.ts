'use server'

import {
  imageSchema,
  profileSchema,
  propertySchema,
  validateWithZodSchema,
} from '@/utils/schemas'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server'
import { paths } from './paths'
import { uploadImage } from './supabase'

const f = '⇒ actions.ts:'

/* ----------------------------------------------------------- */
/*                            GLOBAL                           */
/* ----------------------------------------------------------- */

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
  console.log(error)
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  }
}
/* ----------------------------------------------------------- */
/*                          PROPERTIES                         */
/* ----------------------------------------------------------- */
export const createPropertyAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAuthUser()
  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(propertySchema, rawData)
    const file = formData.get('image') as File
    const validatedFile = validateWithZodSchema(imageSchema, { image: file })
    const fullPath = await uploadImage(validatedFile.image)

    await db.property.create({
      data: {
        ...validatedFields,
        image: fullPath,
        profileId: user.id,
      },
    })
    return { message: 'Property created successfully' }
  } catch (error) {
    return renderError(error)
  }
  redirect(paths.home())
}

type fetchPropertiesProps = {
  search?: string
  category?: string
}
export const fetchProperties = async ({
  search = '',
  category,
}: fetchPropertiesProps) => {
  const properties = await db.property.findMany({
    where: {
      category,
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { tagline: { contains: search, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      name: true,
      tagline: true,
      price: true,
      image: true,
      country: true,
    },
    orderBy: { createdAt: 'desc' },
  })
}

/* ----------------------------------------------------------- */
/*                           PROFILE                           */
/* ----------------------------------------------------------- */
export const createProfileAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const user = await currentUser()
    if (!user) throw new Error('user not found')

    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(profileSchema, rawData)
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

    const validatedFields = validateWithZodSchema(profileSchema, rawData)
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

export const updateProfileImageAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAuthUser()
  try {
    const image = formData.get('image') as File
    const validateFields = validateWithZodSchema(imageSchema, { image })
    const fullPath = await uploadImage(validateFields.image)
    await db.profile.update({
      where: { clerkId: user.id },
      data: { profileImage: fullPath },
    })
    revalidatePath(paths.profile())
    return { message: 'Profile image updated successfully' }
  } catch (error) {
    return renderError(error)
  }
}
