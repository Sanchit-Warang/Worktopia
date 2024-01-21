'use client'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import SeekerRegistrationForm from '@/components/SeekerRegistrationForm'
import HiddenSortButton from '@/components/ui/HiddenSortButton'

const OrganizationSingUpPage = () => {
  return (
    <>
      <div>
        <HeadingWrapper>
          <span>Seeker Sign Up</span>
          <HiddenSortButton />
        </HeadingWrapper>
      </div>
      <div className="my-10 w-full">
        <SeekerRegistrationForm />
      </div>
    </>
  )
}

export default OrganizationSingUpPage
