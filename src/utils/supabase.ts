import { createClient } from '@supabase/supabase-js'

const bucket = 'temp-homeaway'
const url = process.env.SUPABASE_URL as string
const key = process.env.SUPABASE_API_KEY as string

const supabase = createClient(url, key)
export default supabase

export const uploadImage = async (image: File) => {
  const timestamp = Date.now().toString()
  const newName = `${timestamp}-${image.name}`
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '3600' })
  if (!data) throw new Error('Error uploading image')
  return supabase.storage.from(bucket).getPublicUrl(newName)
}
