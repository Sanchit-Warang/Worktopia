import { JobProfile } from '@/types/types'
import { apiSlice } from '@/redux/api/apiSlice'

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
      providesTags: ['JobProfile'],
    }),
    getJobProfile: builder.query<JobProfile, string | string[]>({
      query: (jobId) => ({
        url: `/jobs/jobprofile/${jobId}`,
      }),
    }),
    getAppliedJobProfile: builder.query<JobProfile[], string | string[]>({
      query: (username) => ({
        url: `/applicants/user_applied_jobs/${username}`,
      }),
    }),
  }),
})

export const {
  useGetJobProfilesQuery,
  useGetJobProfileQuery,
  useGetAppliedJobProfileQuery,
} = jobProfileApiSlice
