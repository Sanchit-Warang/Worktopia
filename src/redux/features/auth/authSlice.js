import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: undefined, accessToken: undefined, refreshToken: undefined },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload
      state.user = user
      state.accessToken = accessToken
      state.refreshToken = refreshToken
    },
    logOut: (state, action) => {
      state.user = undefined
      state.token = undefined
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer
