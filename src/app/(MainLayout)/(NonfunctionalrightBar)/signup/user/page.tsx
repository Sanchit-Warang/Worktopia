'use client'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import SeekerRegistrationForm from '@/components/SeekerRegistrationForm'

const OrganizationSingUpPage = () => {
  return (
    <>
      <HeadingWrapper h={'8%'}>
        <div className="h-full p-4 border-b-1 border-borderr text-xl">
          User Sign Up
        </div>
      </HeadingWrapper>
      <div className="h-[92%] w-full py-10">
        <SeekerRegistrationForm />
      </div>
    </>
  )
}

export default OrganizationSingUpPage
