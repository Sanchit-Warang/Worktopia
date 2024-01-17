'use client'
import AppliedJobList from '@/components/AppliedJobList'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import JobsAppliedAndPostedTabs from '@/components/ui/JobsAppliedAndPostedTabs'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { WithAuthSeeker } from '@/components/HOC/WithAuthSeeker'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'

const AppliedPage = () => {
  const { user, userType } = useGetUserAndType()

  if (!user) {
    return <>Not Available for non seeker or org</>
  }

  return (
    <>
      <HeadingWrapper h={'21%'}>
        <div className="h-full flex  flex-col justify-between">
          <div className="p-3 border-b-1 border-borderr">
            <p className="text-lg">Applied jobs</p>
          </div>
          <JobsAppliedAndPostedTabs />
        </div>
      </HeadingWrapper>
      <ScrollableContentWrapper h={'79%'}>
        <AppliedJobList username={user?.username} />
      </ScrollableContentWrapper>
    </>
  )
}

export default WithAuthSeeker(AppliedPage)
