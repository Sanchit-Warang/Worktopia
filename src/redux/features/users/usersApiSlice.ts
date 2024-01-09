import { apiSlice } from '@/redux/api/apiSlice'
import { JobSeekerUser } from '@/types/types'

export const UsersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<JobSeekerUser[], string>({
      query: () => ({
        url: `/account/create/jobseeker`,
      }),
      providesTags:['User']
    }),
    getUser: builder.query<JobSeekerUser, string | string[]>({
      query: (userId) => ({
        url: `/account/jobseeker/${userId}`,
      }),
    }),
  }),
})

export const { useGetUsersQuery, useGetUserQuery } = UsersApiSlice
