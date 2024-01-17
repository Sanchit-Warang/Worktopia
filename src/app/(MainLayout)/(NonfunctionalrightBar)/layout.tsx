'use client'
import RightBar from '@/components/RightBar'
import MainContentWrapper from '@/components/layouts/MainContentWrapper'

const NonFunctionRightBarLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <MainContentWrapper>{children}</MainContentWrapper>
      <RightBar />
    </>
  )
}

export default NonFunctionRightBarLayout
