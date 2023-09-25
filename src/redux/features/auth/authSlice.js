import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, accessToken: null, refreshToken: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload
      state.user = user
      state.accessToken = accessToken
      state.refreshToken = refreshToken
    },
    logOut: (state, action) => {
      state.user = null
      state.token = null
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer
