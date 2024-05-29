import Image from 'next/image'
import React, { type FC } from 'react'

const f = '⇒ ImageContainer.tsx:'

type ImageContainerProps = {
  mainImage: string
  name: string
}

const ImageContainer: FC<ImageContainerProps> = ({ mainImage, name }) => {
  return (
    <section className='relative mt-8 h-[300px] md:h-[500px]'>
      <Image
        src={mainImage}
        alt={name}
        fill
        sizes='100vw'
        className='rounded object-cover'
        priority
      />
    </section>
  )
}
export default ImageContainer
