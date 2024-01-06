'use client'
import { useState } from 'react'

import { ScrollShadow, CircularProgress } from '@nextui-org/react'
import { motion } from 'framer-motion'
import sortJobProfiles from '@/utils/sortJobProfiles'

import JobListItem from './JobListItem'
import { useGetJobProfilesQuery } from '@/redux/features/jobProfile/jobProfileApiSlice'

type Filters = {
  search: string
  role: string
  required_experience__lte: string
  organization__name: string
  salary__lte: string
}

type CleanedFilters = {
  [K in keyof Filters]?: string
}

function cleanFilters(filters: Filters): CleanedFilters {
  const cleanedFilters: CleanedFilters = {}

  for (const key in filters) {
    if (filters[key as keyof Filters].trim() !== '') {
      cleanedFilters[key as keyof Filters] = filters[key as keyof Filters]
    }
  }

  return cleanedFilters
}

type Sort = 'recent' | 'lowToHigh' | 'highToLow'

type Props = {
  filters: Filters
  sort: Sort
}

const JobList = ({ filters, sort }: Props) => {
  const {
    data: jobProfiles,
    isLoading,
    error,
  } = useGetJobProfilesQuery(cleanFilters(filters))
  
  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
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
        sortJobProfiles(jobProfiles, sort).map((jobProfile, i) => (
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

export default JobList
