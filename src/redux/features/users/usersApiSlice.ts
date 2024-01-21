import { apiSlice } from '@/redux/api/apiSlice'
import { JobSeekerUser } from '@/types/types'

export const UsersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<JobSeekerUser[], string>({
      query: () => ({
        url: `/account/create/jobseeker`,
      }),
      keepUnusedDataFor: Infinity,
      providesTags: ['User'],
    }),
    getUser: builder.query<JobSeekerUser, string | string[]>({
      query: (userId) => ({
        url: `/account/jobseeker/${userId}`,
      }),
      keepUnusedDataFor: Infinity,
    }),
    getApplications: builder.query<JobSeekerUser[], string | string[]>({
      query: (Id) => ({
        url: `/applicants/job_applications/${Id}`,
      }),
      keepUnusedDataFor: Infinity,
    }),
  }),
})

export const { useGetUsersQuery, useGetUserQuery, useGetApplicationsQuery } =
  UsersApiSlice
