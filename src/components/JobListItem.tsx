'use client'

import { Avatar } from '@nextui-org/react'
import { JobProfile } from '@/types/types'
import formatDate from '@/utils/formatDate'
import Skills from './Skills'
import Link from 'next/link'

type Props = {
  jobProfile: JobProfile
}

const JobListItem = ({ jobProfile }: Props) => {
  return (
    <Link href={`/job/${jobProfile.id}`}>
    <div className="flex flex-wrap gap-4 items-center p-3">
      <Avatar isBordered color='success' src={`https://jobcom-media-1.s3.amazonaws.com/${jobProfile.organization_profile_pic}`} size="lg" />
      <div>
        <div className="text-md">
          {jobProfile.role}{' '}
          <span className="text-copy-lighter">
            at {jobProfile.organization_name}
          </span>
        </div>
        <div className="text-sm text-copy-lighter">
          {jobProfile.employee_type} | ₹{jobProfile.salary} LPA |{' '}
          {jobProfile.required_experience}+ years of experience | Posted on{' '}
          {formatDate(jobProfile.created_at)}
        </div>
        <div className="m-1">
          <Skills delay={0.3} all={false} skills={jobProfile.skills_required} />
        </div>
      </div>
    </div>
    </Link>
  )
}

export default JobListItem
