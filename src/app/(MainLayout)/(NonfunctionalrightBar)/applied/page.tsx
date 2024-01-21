'use client'
import AppliedJobList from '@/components/AppliedJobList'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import JobsAppliedAndPostedTabs from '@/components/ui/JobsAppliedAndPostedTabs'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { WithAuthSeeker } from '@/components/HOC/WithAuthSeeker'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import HiddenSortButton from '@/components/ui/HiddenSortButton'
import HiddenSearch from '@/components/ui/HiddenSearch'

const AppliedPage = () => {
  const { user, userType } = useGetUserAndType()

  if (!user) {
    return <>Not Available for non seeker or org</>
  }

  return (
    <>
      <HeadingWrapper>
        <p className="text-lg">Applied jobs</p>
        <HiddenSortButton />
      </HeadingWrapper>
      <HiddenSearch />  
      <JobsAppliedAndPostedTabs />
      <ScrollableContentWrapper>
        <AppliedJobList username={user?.username} />
      </ScrollableContentWrapper>
    </>
  )
}

export default WithAuthSeeker(AppliedPage)
