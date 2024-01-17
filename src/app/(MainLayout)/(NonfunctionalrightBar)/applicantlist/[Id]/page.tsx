'use client'
import { WithAuthOrg } from '@/components/HOC/WithAuthOrg'
import { useGetJobProfileQuery } from '@/redux/features/jobProfile/jobProfileApiSlice'
import { CircularProgress } from '@nextui-org/react'
import { useGetApplicationsQuery } from '@/redux/features/users/usersApiSlice'
import { useParams } from 'next/navigation'
import { HideApplicantList } from '@/components/HOC/HideApplicantList'
import UserListWithoutFetch from '@/components/ui/UserListWithoutFetch'

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
      <div className="p-3 border-b-1 border-borderr">
        <p className="text-lg">
          Applicant List for {jobprofile.role} at {jobprofile.organization_name}
        </p>
      </div>
      <UserListWithoutFetch users={applications}/>
    </>
  )
}

export default WithAuthOrg(HideApplicantList(ApplicantListPage))
