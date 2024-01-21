'use client'
import JobPostedList from '@/components/JobPostedList'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import JobsAppliedAndPostedTabs from '@/components/ui/JobsAppliedAndPostedTabs'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { WithAuthOrg } from '@/components/HOC/WithAuthOrg'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import HiddenSortButton from '@/components/ui/HiddenSortButton'
import HiddenSearch from '@/components/ui/HiddenSearch'

const PostedJobPage = () => {
  const { user, userType } = useGetUserAndType()

  if (!user || userType === 'Seeker') {
    return <>Not Available for non org</>
  }

  return (
    <>
      <HeadingWrapper h={'21%'}>
        <span>Posted jobs</span>
        <HiddenSortButton/>
      </HeadingWrapper>
    <HiddenSearch/>
      <JobsAppliedAndPostedTabs />

      <ScrollableContentWrapper h={'79%'}>
        <JobPostedList username={'name' in user ? user.name : ''} />
      </ScrollableContentWrapper>
    </>
  )
}

export default WithAuthOrg(PostedJobPage)
