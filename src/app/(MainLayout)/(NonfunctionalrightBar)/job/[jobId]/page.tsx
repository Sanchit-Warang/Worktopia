'use client'
import { useParams } from 'next/navigation'
import {
  ScrollShadow,
  CircularProgress,
  Avatar,
  Button,
} from '@nextui-org/react'
import Skills from '@/components/Skills'
import {
  useGetJobProfileQuery,
  useGetHasAppliedToJobProfileQuery,
  useCreateJobProfileApplicationMutation,
} from '@/redux/features/jobProfile/jobProfileApiSlice'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import formatDate from '@/utils/formatDate'
import toast from 'react-hot-toast'

const JobPage = () => {
  const { jobId } = useParams()
  const { user } = useGetUserAndType()
  const jobIdAsString = Array.isArray(jobId) ? jobId[0] : jobId
  const { data: jobProfile, isLoading, error } = useGetJobProfileQuery(jobId)
  const application = useGetHasAppliedToJobProfileQuery(jobIdAsString)
  const [createApplication, { isLoading: createApplicationLoading }] =
    useCreateJobProfileApplicationMutation()

  if (isLoading || jobProfile === undefined) {
    return (
      <div className=" h-[100%] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (error) {
    return <div>error</div>
  }

  const handleApplicationClick = async () => {
    try {
      await createApplication({
        job_profile: +jobIdAsString,
        job_seeker: user?.id,
      })
      toast.success('Applied Successfully')
    } catch (error: any) {
      toast.error(error?.data?.error ?? 'Something went wrong')
    }
  }

  return (
    <>
      <div className=" h-[8%] items-center p-3 border-b-1 border-borderr">
        <span className="text-2xl">Job at {jobProfile?.organization_name}</span>
      </div>
      <ScrollShadow
        size={100}
        className="h-[92%] scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive"
      >
        <div className="bg-card-bg p-6">
          <div className="flex items-center justify-between border-b-2 border-borderr pb-3">
            <Avatar
              isBordered
              color="success"
              size="lg"
              src={`https://res.cloudinary.com/dlkqz4nqp/image/upload/v1/${jobProfile?.organization_profile_pic}`}
            />
            {application.data && (
              <>
                {application.data.has_applied ? (
                  <Button
                    className="h-[1.5rem]"
                    color="success"
                    variant="flat"
                    isDisabled={application.data.has_applied}
                  >
                    Applied
                  </Button>
                ) : (
                  <Button
                    className="h-[1.5rem]"
                    color="success"
                    variant="shadow"
                    isDisabled={application.data.has_applied}
                    isLoading={createApplicationLoading}
                    onClick={() => {
                      handleApplicationClick()
                    }}
                  >
                    Apply
                  </Button>
                )}
              </>
            )}
          </div>
          <div className="mt-4">
            <div className="text-lg my-2">{jobProfile?.role}</div>
            <div className="text-sm my-2 text-copy-lighter">
              At {jobProfile?.organization_name} • {jobProfile?.employee_type}
            </div>
            <div className="flex items-start gap-3 text-md my-2">
              <div>
                <div className="text-copy-lighter">Experience</div>
                <div className="text-sm">{jobProfile?.required_experience}</div>
              </div>
              <div>
                <div className="text-copy-lighter">Salary</div>
                <div className="text-sm">{jobProfile?.salary} LPA</div>
              </div>
              <div>
                <div className="text-copy-lighter">Type</div>
                <div className="text-sm">{jobProfile?.employee_type}</div>
              </div>
            </div>
            <div className="my-2 text-sm">
              <span className="text-copy-lighter">Posted on </span>
              {jobProfile && <span>{formatDate(jobProfile.created_at)}</span>}
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="my-2 border-b-1 border-borderr pb-3">
            <div className="my-2">Skills</div>
            <Skills delay={0} all={true} skills={jobProfile.skills_required} />
          </div>
          <div className="my-4">
            <div className="my-2">About This Opportunity</div>
            <div className="my-2 text-sm text-justify">
              {jobProfile.job_description}
            </div>
          </div>
        </div>
      </ScrollShadow>
    </>
  )
}

export default JobPage
