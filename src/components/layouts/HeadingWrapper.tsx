'use client'

type Props = {
  children: React.ReactNode,
  h? : string
}

const HeadingWrapper = ({
  children,
  h = '17%',
}: Props) => {
  return <div className="flex items-center p-3 border-b-1 border-borderr">{children}</div>
}

export default HeadingWrapper
