import { fetchProfileImage } from '@/utils/actions'
import Image from 'next/image'
import React, { type FC } from 'react'
import { LuUser2 } from 'react-icons/lu'

const f = '⇒ UserIcon.tsx (UserIcon):'

const UserIcon: FC = async () => {
  const profileImage = await fetchProfileImage()
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt='profile image'
        width={6}
        height={6}
        className='h-6 w-6 rounded-full object-cover'
      />
    )
  }
  return <LuUser2 className='h-6 w-6 rounded-full bg-primary text-white' />
}
export default UserIcon
