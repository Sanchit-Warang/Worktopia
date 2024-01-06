'use client'

import { CircularProgress } from '@nextui-org/react'
import { motion } from 'framer-motion'
import sortJobProfiles from '@/utils/sortJobProfiles'

import JobListItem from './JobListItem'
import { useGetAppliedJobProfileQuery } from '@/redux/features/jobProfile/jobProfileApiSlice'

type Props = {
  username: string | string[]
}

const AppliedJobList = ({ username }: Props) => {
  const { data: jobProfiles, isLoading, error } = useGetAppliedJobProfileQuery(username)

  if (isLoading) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (error) {
    return <div>error</div>
  }

  return (
    <>
      {jobProfiles &&
        jobProfiles?.length !== 0 &&
        jobProfiles.map((jobProfile, i) => (
          <motion.div
            className="bg-card-bg cursor-pointer"
            key={jobProfile.id}
            initial={{ opacity: 0, translateY: 15 }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{ duration: 0.3, delay: i * 0.3 }}
          >
            <JobListItem jobProfile={jobProfile} />
          </motion.div>
        ))}
      {jobProfiles?.length === 0 && (
        <div className="text-center pt-2">No Entries</div>
      )}
    </>
  )
}

export default AppliedJobList
