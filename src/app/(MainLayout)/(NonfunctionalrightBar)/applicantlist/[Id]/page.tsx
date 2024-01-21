'use client'
import { WithAuthOrg } from '@/components/HOC/WithAuthOrg'
import { useGetJobProfileQuery } from '@/redux/features/jobProfile/jobProfileApiSlice'
import { CircularProgress } from '@nextui-org/react'
import { useGetApplicationsQuery } from '@/redux/features/users/usersApiSlice'
import { useParams } from 'next/navigation'
import { HideApplicantList } from '@/components/HOC/HideApplicantList'
import UserListWithoutFetch from '@/components/ui/UserListWithoutFetch'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import HiddenSortButton from '@/components/ui/HiddenSortButton'

const ApplicantListPage = () => {
  const { Id } = useParams()
  const { data: jobprofile, isLoading: jobProfileLoading } =
    useGetJobProfileQuery(Id)
  const { data: applications, isLoading } = useGetApplicationsQuery(Id)

  if (isLoading || jobProfileLoading || !applications || !jobprofile) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  return (
    <>
      <HeadingWrapper>
        <span>
          Applicant List for {jobprofile.role} at {jobprofile.organization_name}
        </span>
        <HiddenSortButton />
      </HeadingWrapper>
      <UserListWithoutFetch users={applications} />
    </>
  )
}

export default WithAuthOrg(HideApplicantList(ApplicantListPage))
