'use client'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import OrgRegistrationForm from '@/components/OrgRegistrationForm'

const OrganizationSingUpPage = () => {
  return (
    <>
      <HeadingWrapper h={'8%'}>
        <div className="h-full p-4 border-b-1 border-borderr text-xl">
          Organization Sign Up
        </div>
      </HeadingWrapper>
      <div className="h-[92%] w-full py-10">
        <OrgRegistrationForm />
      </div>
    </>
  )
}

export default OrganizationSingUpPage
