'use client'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import JobPostForm from '@/components/JobPostForm'
import { WithAuthOrg } from '@/components/HOC/WithAuthOrg'
import HiddenSortButton from '@/components/ui/HiddenSortButton'

const JobPostingPage = () => {
  return (
    <>
      <HeadingWrapper>
          Post a Job Opportunity
          <HiddenSortButton/>
      </HeadingWrapper>
      <div className="h-[92%] w-full py-10">
        <div className="w-[90%] md:w-[60%] mx-auto">
          <JobPostForm />
        </div>
      </div>
    </>
  )
}

export default WithAuthOrg(JobPostingPage)
