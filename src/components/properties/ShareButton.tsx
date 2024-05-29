'use client'
import React, { type FC } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '../ui/button'
import { LuShare2 } from 'react-icons/lu'

import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share'

const f = '⇒ ShareButton.tsx:'

type ShareButtonProps = {
  propertyId: string
  name: string
}

const ShareButton: FC<ShareButtonProps> = ({ propertyId, name }) => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL
  const shareLink = `${url}/properties/${propertyId}`
  console.log(f, 'shareLink →', shareLink)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='p-2'
        >
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side='top'
        align='end'
        sideOffset={10}
        className='flex w-full items-center justify-center gap-x-2'
      >
        <TwitterShareButton
          url={shareLink}
          title={name}
        >
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>
        <LinkedinShareButton
          url={shareLink}
          title={name}
        >
          <LinkedinIcon
            size={32}
            round
          />
        </LinkedinShareButton>
        <EmailShareButton
          url={shareLink}
          subject={name}
        >
          <EmailIcon
            size={32}
            round
          />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  )
}
export default ShareButton
