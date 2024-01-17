'use client'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import JobPostForm from '@/components/JobPostForm'
import { WithAuthOrg } from '@/components/HOC/WithAuthOrg'

const JobPostingPage = () => {
  return (
    <>
      <HeadingWrapper h={'8%'}>
        <div className="h-full p-4 border-b-1 border-borderr text-xl">
          Post a Job Opportunity
        </div>
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
