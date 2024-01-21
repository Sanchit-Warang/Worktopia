import { JobPostFormValues, JobProfile, JobApplication } from '@/types/types'
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
      keepUnusedDataFor: Infinity,
      providesTags: ['JobProfile'],
    }),
    getJobProfile: builder.query<JobProfile, string | string[]>({
      query: (jobId) => ({
        url: `/jobs/jobprofile/${jobId}`,
      }),
      keepUnusedDataFor: Infinity,
    }),
    getAppliedJobProfile: builder.query<JobProfile[], string | string[]>({
      query: (username) => ({
        url: `/applicants/user_applied_jobs/${username}`,
      }),
      keepUnusedDataFor: Infinity,
      providesTags: ['JobProfile']
    }),
    createJobProfile: builder.mutation<any, JobPostFormValues>({
      query: (data) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/jobs/jobprofile',
        method: 'POST',
        body: JSON.stringify({
          ...data,
          required_experience: data.experience,
          employee_type: data.type,
          job_description: data.description,
          skills_required: data.skills,
        }),
      }),
      invalidatesTags: ['JobProfile'],
    }),
    getPostedJobProfile: builder.query<JobProfile[], string | string[]>({
      query: () => ({
        url: `/jobs/jobprofile`,
      }),
      keepUnusedDataFor: Infinity,
      transformResponse: (response: JobProfile[], meta, arg) => {
        return response.filter((job) => job.organization_name === arg)
      },
    }),
    getHasAppliedToJobProfile: builder.query<
      {
        has_applied: boolean
      },
      string
    >({
      query: (jobId) => ({
        url: `/applicants/status/${jobId}`,
      }),
      keepUnusedDataFor: Infinity,
      providesTags: (result, error, arg) => [{ type: 'Application', id: arg }],
    }),
    createJobProfileApplication: builder.mutation<
      JobApplication,
      {
        job_profile: number
        job_seeker: number | undefined
      }
    >({
      query: (data) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/applicants/application',
        method: 'POST',
        body: JSON.stringify({
          ...data,
          status: 'pending',
        }),
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Application', id: arg.job_profile },
        {type: 'JobProfile'}
      ],
    }),
  }),
})

export const {
  useGetJobProfilesQuery,
  useGetJobProfileQuery,
  useGetAppliedJobProfileQuery,
  useCreateJobProfileMutation,
  useGetPostedJobProfileQuery,
  useGetHasAppliedToJobProfileQuery,
  useCreateJobProfileApplicationMutation
} = jobProfileApiSlice
