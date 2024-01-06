'use client'
import { twMerge } from 'tailwind-merge'

import { ScrollShadow } from '@nextui-org/react'

type Props = {
  children: React.ReactNode
  h?: string
}

const t = 'h-[79%]'
const ScrollableContentWrapper = ({ children, h = '83%' }: Props) => {
  return (
    <ScrollShadow
      size={100}
      className={twMerge(
        `h-[${h}]`,
        `scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive`
      )}
    >
      {children}
    </ScrollShadow>
  )
}

export default ScrollableContentWrapper
