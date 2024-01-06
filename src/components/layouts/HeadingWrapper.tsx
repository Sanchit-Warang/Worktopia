'use client'
import { twMerge } from "tailwind-merge"

// 21 title ,search, tabs
// 17 title search
// 8 title

type Props = {
  children: React.ReactNode,
  h? : string
}

const styles = "h-[79%] min-h-[79%] h-[21%] h-[83%] h-[17%] h-[8%] h-[92%]"

const HeadingWrapper = ({
  children,
  h = '17%',
}: Props) => {
  return <div className={twMerge(`h-[${h}] p-1`)}>{children}</div>
}

export default HeadingWrapper
