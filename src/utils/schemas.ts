import * as z from 'zod'
import { ZodSchema } from 'zod'

export const profileSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  username: z.string().min(1, { message: 'Username is required' }),
})
export type ProfileSchemaType = ZodSchema<typeof profileSchema>
