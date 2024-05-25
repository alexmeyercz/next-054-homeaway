import * as z from 'zod'
import { ZodSchema } from 'zod'

export const profileSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  username: z.string().min(1, { message: 'Username is required' }),
})
export type ProfileSchemaType = ZodSchema<typeof profileSchema>

export const validateWithZodSchema = <T>(
  schema: ZodSchema<T>,
  data: unknown,
): T => {
  const result = schema.safeParse(data)
  if (!result.success) {
    const errors = result.error.errors.map((error) => {
      return error.message
    })
    throw new Error(errors.join(', '))
  }
  return result.data
}

const validateFile = () => {
  const maxUploadSize = 1024 * 1024 * 2 // 2MB
  const acceptedFileTypes = ['image/']
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize
    }, 'File size must be less than 2MB')
    .refine((file) => {
      return (
        !file ||
        acceptedFileTypes.some((type) => {
          return file.type.startsWith(type)
        })
      )
    }, 'File must be an image')
}

export const imageSchema = z.object({
  image: validateFile(),
})
export type ImageSchemaType = ZodSchema<typeof imageSchema>
