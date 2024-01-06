'use client'
import { useParams } from 'next/navigation'
import { ScrollShadow, CircularProgress, Avatar } from '@nextui-org/react'
import Skills from '@/components/Skills'
import { useGetJobProfileQuery } from '@/redux/features/jobProfile/jobProfileApiSlice'
import formatDate from '@/utils/formatDate'
const JobPage = () => {
  const { jobId } = useParams()
  const { data: jobProfile, isLoading, error } = useGetJobProfileQuery(jobId)

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
          <div className="border-b-2 border-borderr pb-3">
            <Avatar
            isBordered color='success'
              size="lg"
              src={`https://jobcom-media-1.s3.amazonaws.com/${jobProfile?.organization_profile_pic}`}
            />
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
            <div className="my-2 text-sm">
              {jobProfile.job_description}
            </div>
          </div>
        </div>
      </ScrollShadow>
    </>
  )
}

export default JobPage
