import { JobPostFormValues, JobProfile } from '@/types/types'
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
      transformResponse: (response: JobProfile[], meta, arg) => {
        return response.filter((job) => job.organization_name === arg)
      },
    }),
  }),
})

export const {
  useGetJobProfilesQuery,
  useGetJobProfileQuery,
  useGetAppliedJobProfileQuery,
  useCreateJobProfileMutation,
  useGetPostedJobProfileQuery,
} = jobProfileApiSlice
