import { apiSlice } from '@/redux/api/apiSlice'
import { JobSeekerUser, Connection } from '@/types/types'

export const ConnectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConnections: builder.query<JobSeekerUser[], string>({
      query: () => ({
        url: `/connections/connections`,
      }),
      keepUnusedDataFor: 0,
      providesTags: ['Connections'],
    }),
    getConnectionsReceived: builder.query<JobSeekerUser[], string>({
      query: () => ({
        url: `/connections/received`,
      }),
      keepUnusedDataFor: 0,
      providesTags: ['Connections Received'],
    }),
    getHasConnected: builder.query<
      {
        connection_status: string | null
      },
      string
    >({
      query: (userName) => ({
        url: `/connections/status/${userName}`,
      }),
      keepUnusedDataFor: 0,
    }),
    createConnectionRequest: builder.mutation<
      Connection,
      { user1: number; user2: number }
    >({
      query: (data) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/connections/create',
        method: 'POST',
        body: JSON.stringify({
          ...data,
        }),
      }),
    }),
  }),
})

export const { useGetConnectionsQuery, useGetConnectionsReceivedQuery,
useCreateConnectionRequestMutation, useGetHasConnectedQuery } =
  ConnectionsApiSlice
