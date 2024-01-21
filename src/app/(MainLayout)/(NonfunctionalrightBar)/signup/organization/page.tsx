'use client'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import OrgRegistrationForm from '@/components/OrgRegistrationForm'
import HiddenSortButton from '@/components/ui/HiddenSortButton'

const OrganizationSingUpPage = () => {
  return (
    <>
      <div>
        <HeadingWrapper>
          <span>Organization Sign Up</span>
          <HiddenSortButton />
        </HeadingWrapper>
      </div>
      <div className="my-10 w-full">
        <OrgRegistrationForm />
      </div>
    </>
  )
}

export default OrganizationSingUpPage
