'use client'
import LoginFormCard from '@/components/LoginFormCard'
import { WithoutAuth } from '@/components/HOC/WithoutAuth'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
const LoginPage = () => {
  return (
    <>
      <HeadingWrapper h={'8%'}>
        <div className="h-full p-4 border-b-1 border-borderr text-xl">
          Login
        </div>
      </HeadingWrapper>
      <ScrollableContentWrapper h={'92%'}>
        <div className="h-full py-10 w-full">
          <LoginFormCard />
        </div>
      </ScrollableContentWrapper>
    </>
  )
}

export default WithoutAuth(LoginPage)
