'use server'

import {
  ReviewType,
  createReviewSchema,
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
import { RatingCountType } from './types'

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
  console.error(f, 'getAuthUser(): error →', error)
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
  // add artificial delay
  // await new Promise((resolve) => setTimeout(resolve, 3000))
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
  return properties
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

/* ----------------------------------------------------------- */
/*                          FAVORITES                          */
/* ----------------------------------------------------------- */
type fetchFavoriteIdProps = {
  propertyId: string
}
export const fetchFavoriteId = async ({ propertyId }: fetchFavoriteIdProps) => {
  const user = await getAuthUser()
  const favorite = await db.favorite.findFirst({
    where: {
      propertyId,
      profileId: user.id,
    },
    select: {
      id: true,
    },
  })

  return favorite?.id || null
}

export const toggleFavoriteAction = async (prevState: {
  propertyId: string
  favoriteId: string | null
  pathname: string
}) => {
  const user = await getAuthUser()
  const { propertyId, favoriteId, pathname } = prevState

  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      })
    } else {
      await db.favorite.create({
        data: {
          propertyId,
          profileId: user.id,
        },
      })
    }
    revalidatePath(pathname)
    return { message: favoriteId ? 'Removed from Faves' : 'Added to Faves' }
  } catch (error) {
    return renderError(error)
  }
}

export const fetchFavorites = async () => {
  const user = await getAuthUser()
  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      property: {
        select: {
          id: true,
          name: true,
          tagline: true,
          price: true,
          image: true,
          country: true,
        },
      },
    },
  })
  return favorites.map((favorite) => favorite.property)
}

export const fetchPropertyDetails = (id: string) => {
  return db.property.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  })
}

/* ----------------------------------------------------------- */
/*                           REVIEWS                           */
/* ----------------------------------------------------------- */
export const createReviewAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAuthUser()

  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(createReviewSchema, rawData)
    await db.review.create({
      data: {
        ...validatedFields,
        profileId: user.id,
      },
    })
    revalidatePath(paths.property(validatedFields.propertyId))
    return { message: 'review submitted successfully' }
  } catch (error) {
    return renderError(error)
  }
}

export const fetchPropertyReviews = async (
  propertyId: string,
): Promise<ReviewType[]> => {
  const reviews = await db.review.findMany({
    where: {
      propertyId,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      profile: {
        select: {
          firstName: true,
          profileImage: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })
  return reviews
}

export const fetchPropertyReviewsByUser = async () => {
  const user = await getAuthUser()
  const reviews = await db.review.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      property: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  })
  return reviews
}

export const deleteReviewAction = async (prevState: { reviewId: string }) => {
  const { reviewId } = prevState
  const user = await getAuthUser()
  try {
    await db.review.delete({
      where: {
        id: reviewId,
        profileId: user.id,
      },
    })
    revalidatePath(paths.reviews())
  } catch (error) {
    return renderError(error)
  }
  return { message: 'delete review' }
}

export const fetchPropertyRating = async (
  propertyId: string,
): Promise<RatingCountType> => {
  const result = await db.review.groupBy({
    by: ['propertyId'],
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
    where: {
      propertyId,
    },
  })
  const propertyRating = {
    rating: parseFloat(result[0]?._avg.rating?.toFixed(1) ?? '0'),
    count: result[0]?._count.rating ?? 0,
  }
  return propertyRating
}
