'use client'
import JobPostedList from '@/components/JobPostedList'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import JobsAppliedAndPostedTabs from '@/components/ui/JobsAppliedAndPostedTabs'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { WithAuthOrg } from '@/components/HOC/WithAuthOrg'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'

const PostedJobPage = () => {
  
  const { user, userType } = useGetUserAndType()

  if (!user ||  userType === 'Seeker') {
    return <>Not Available for non org</>
  }

  return (
    <>
      <HeadingWrapper h={'21%'}>
        <div className="h-full flex  flex-col justify-between">
          <div className="p-3 border-b-1 border-borderr">
            <p className="text-lg">Posted jobs</p>
          </div>
          <JobsAppliedAndPostedTabs/>
        </div>
      </HeadingWrapper>
      <ScrollableContentWrapper h={'79%'}>
        <JobPostedList username={"name" in user ? user.name : ''} />
      </ScrollableContentWrapper>
    </>
  )
}

export default WithAuthOrg(PostedJobPage)
