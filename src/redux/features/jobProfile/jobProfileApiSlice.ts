import { apiSlice } from '@/redux/api/apiSlice'
import { JobProfile } from '@/types/types'

export const jobProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobProfiles: builder.query<
      JobProfile[],
      {
        search?: string
        role?: string
        required_experience__lte?: string
        salary__lte?: string
        organization__name?: string
      }
    >({
      query: (params) => ({
        url: '/jobs/jobprofile',
        params,
      }),
      keepUnusedDataFor: 0,
    }),
    getJobProfile: builder.query<JobProfile, string | string[]>({
      query: (jobId) => ({
        url: `/jobs/jobprofile/${jobId}`,
      }),
      keepUnusedDataFor: 0,
    }),
    getAppliedJobProfile: builder.query<JobProfile[], string | string[]>({
      query: (username) => ({
        url: `/applicants/user_applied_jobs/${username}`,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
})

export const { useGetJobProfilesQuery, useGetJobProfileQuery, useGetAppliedJobProfileQuery } =
  jobProfileApiSlice
