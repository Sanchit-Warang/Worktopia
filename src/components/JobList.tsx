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
  // const jobProfiles: JobProfile[] = [
  //   {
  //     id: 1,
  //     organization_name: 'Google',
  //     role: 'Software Engineer',
  //     required_experience: 3,
  //     employee_type: 'Full-time',
  //     salary: 100000,
  //     job_description: 'Develop and maintain software applications...',
  //   },
  //   {
  //     id: 2,
  //     organization_name: 'Amazon',
  //     role: 'Data Scientist',
  //     required_experience: 5,
  //     employee_type: 'Full-time',
  //     salary: 120000,
  //     job_description: 'Analyze and interpret large datasets...',
  //   },
  //   {
  //     id: 3,
  //     organization_name: 'Microsoft',
  //     role: 'Product Manager',
  //     required_experience: 7,
  //     employee_type: 'Full-time',
  //     salary: 150000,
  //     job_description: 'Lead the development and launch of new products...',
  //   },
  //   {
  //     id: 4,
  //     organization_name: 'Apple',
  //     role: 'UX Designer',
  //     required_experience: 4,
  //     employee_type: 'Full-time',
  //     salary: 90000,
  //     job_description:
  //       'Design user interfaces for mobile and web applications...',
  //   },
  //   {
  //     id: 5,
  //     organization_name: 'Meta',
  //     role: 'Machine Learning Engineer',
  //     required_experience: 6,
  //     employee_type: 'Full-time',
  //     salary: 130000,
  //     job_description: 'Build and deploy machine learning models...',
  //   },
  //   {
  //     id: 6,
  //     organization_name: 'Netflix',
  //     role: 'Software Engineer',
  //     required_experience: 3,
  //     employee_type: 'Full-time',
  //     salary: 110000,
  //     job_description: 'Develop and maintain video streaming platform...',
  //   },
  //   {
  //     id: 7,
  //     organization_name: 'Spotify',
  //     role: 'Data Analyst',
  //     required_experience: 2,
  //     employee_type: 'Full-time',
  //     salary: 80000,
  //     job_description:
  //       'Analyze music streaming data to improve user experience...',
  //   },
  //   {
  //     id: 8,
  //     organization_name: 'Tesla',
  //     role: 'Software Engineer',
  //     required_experience: 5,
  //     employee_type: 'Full-time',
  //     salary: 140000,
  //     job_description: 'Develop software for autonomous vehicles...',
  //   },
  //   {
  //     id: 9,
  //     organization_name: 'Airbnb',
  //     role: 'Product Designer',
  //     required_experience: 4,
  //     employee_type: 'Full-time',
  //     salary: 105000,
  //     job_description: 'Design user experiences for the Airbnb platform...',
  //   },
  //   {
  //     id: 10,
  //     organization_name: 'Adobe',
  //     role: 'Software Engineer',
  //     required_experience: 3,
  //     employee_type: 'Full-time',
  //     salary: 95000,
  //     job_description: 'Develop creative software applications...',
  //   },
  //   {
  //     id: 11,
  //     organization_name: 'Salesforce',
  //     role: 'Solutions Architect',
  //     required_experience: 6,
  //     employee_type: 'Full-time',
  //     salary: 125000,
  //     job_description:
  //       'Design and implement Salesforce solutions for clients...',
  //   },
  //   {
  //     id: 12,
  //     organization_name: 'Uber',
  //     role: 'Data Scientist',
  //     required_experience: 5,
  //     employee_type: 'Full-time',
  //     salary: 125000,
  //     job_description:
  //       'Design and implement Salesforce solutions for clients...',
  //   },
  // ]

  if (isLoading) {
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
