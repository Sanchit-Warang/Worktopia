import { apiSlice } from '@/redux/api/apiSlice'
import { JobSeekerUser } from '@/types/types'

export const UsersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<JobSeekerUser[], string>({
      query: () => ({
        url: `/account/create/jobseeker`,
      }),
      keepUnusedDataFor: 60,
    }),
    getUser: builder.query<JobSeekerUser, string | string[]>({
      query: (userId) => ({
        url: `/account/jobseeker/${userId}`,
      }),
      keepUnusedDataFor: 60,
    }),
  }),
})

export const { useGetUsersQuery, useGetUserQuery } = UsersApiSlice
