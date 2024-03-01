'use client'

import { Avatar, Button } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { JobProfile } from '@/types/types'
import formatDate from '@/utils/formatDate'
import Skills from './Skills'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Props = {
  jobProfile: JobProfile
}

const JobListItem = ({ jobProfile }: Props) => {
  const path = usePathname()
  const router = useRouter()
  return (
    <Link href={`/job/${jobProfile.id}`}>
      <div className="flex flex-wrap gap-4 items-center p-3">
        <Avatar
          isBordered
          color="success"
          src={`https://res.cloudinary.com/dlkqz4nqp/image/upload/v1/${jobProfile.organization_profile_pic}`}
          size="lg"
        />
        <div>
          <div className="text-md">
            {jobProfile.role}{' '}
            <span className="text-copy-lighter">
              at {jobProfile.organization_name}
            </span>
          </div>
          <div className="text-sm text-copy-lighter">
            {jobProfile.employee_type} • ₹{jobProfile.salary} LPA •{' '}
            {jobProfile.required_experience}+ years of experience • Posted on{' '}
            {formatDate(jobProfile.created_at)}
          </div>
          <div className="m-1">
            <Skills
              delay={0.3}
              all={false}
              skills={jobProfile.skills_required}
            />
          </div>
        </div>
        {path.includes('/jobposted') && (
          <div>
            <Button
              size="sm"
              className="h-[1.5rem]"
              variant="bordered"
              color="primary"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                router.replace(`/applicantlist/${jobProfile.id}`)
              }}
            >
              See Applicants
            </Button>
          </div>
        )}
      </div>
    </Link>
  )
}

export default JobListItem
