import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '@/redux/features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'include',
  retry: 10,
  prepareHeaders: (headers, { getState }) => {
    // headers.set('content-type', 'application/json')
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
  if (result?.error?.status === 401) {
    console.log('acessToken expired')
    const tempRT = api.getState().auth.refreshToken
    const tempAT = api.getState().auth.accessToken
    console.log({
      tempAT: `${tempAT}`,
      tempRT: `${tempRT}`
    })
    // send refresh token to get new access token
    // const newAcessTokenRes = await baseQuery('/account/token/refresh', api, {
    //   method: 'POST',
    //   body: { refreshToken: tempRT },
    //   // ...extraOptions,
    // })

    const newAcessTokenRes = await fetch('/api/account/token/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Adjust headers if needed
        'Authorization': `Bearer ${tempAT}`
      },
      body: JSON.stringify({ refresh: tempRT }),
    });

    // console.log('Sanchit', newAcessTokenRes)

    if (
      newAcessTokenRes?.error?.status === 401 ||
      newAcessTokenRes?.error?.status === 403
    ) {
      console.log('i ran')
      api.dispatch(logOut())
    } else {
      console.log('hi')
      const temp = await newAcessTokenRes.json()
      const user = api.getState().auth.user
      api.dispatch(
        setCredentials({
          user,
          accessToken: temp.access,
          refreshToken: temp.refresh,
        })
      )
      // retry the original request
      console.log('fixed')
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['JobProfile', 'Company', 'User'],
  endpoints: (builder) => ({}),
})

