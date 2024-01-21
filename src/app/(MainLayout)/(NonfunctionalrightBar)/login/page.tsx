'use client'
import LoginFormCard from '@/components/LoginFormCard'
import { WithoutAuth } from '@/components/HOC/WithoutAuth'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import HiddenSortButton from '@/components/ui/HiddenSortButton'
const LoginPage = () => {
  return (
    <>
      <HeadingWrapper>
        <span>Login</span>
        <HiddenSortButton />
      </HeadingWrapper>
      <ScrollableContentWrapper>
        <div className="h-full py-10 w-full">
          <LoginFormCard />
        </div>
      </ScrollableContentWrapper>
    </>
  )
}

export default WithoutAuth(LoginPage)
