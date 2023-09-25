import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '@/redux/features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    headers.set('content-type', 'application/json')
    const accessToken = getState().auth.accessToken
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  console.log(result)
  if (result?.error?.originalStatus === 401) {
    console.log('acessToken expired')
    const tempRT = api.getState().auth.refreshToken
    // send refresh token to get new access token
    const newAcessTokenRes = await baseQuery('/refresh', api, {
      method: 'POST',
      body: { refreshToken: tempRT },
      ...extraOptions,
    })

    if (
      newAcessTokenRes?.error?.originalStatus === 401 ||
      newAcessTokenRes?.error?.originalStatus === 403
    ) {
      api.dispatch(logOut())
    } else {
      const user = api.getState().auth.user
      api.dispatch(
        setCredentials({
          user,
          accessToken: newAcessTokenRes.data.accessToken,
          refreshToken: newAcessTokenRes.data.refreshToken,
        })
      )
      // retry the original request
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
})
