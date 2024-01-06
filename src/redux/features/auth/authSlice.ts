import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/types/types'


const getUserInfoFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const jsonString = localStorage.getItem('userInfo')
    return jsonString !== null ? JSON.parse(jsonString) : null
  }
  return null
}

const userInfo = getUserInfoFromLocalStorage()

const initialState: AuthState = userInfo
  ? userInfo
  : {
      user: undefined,
      accessToken: undefined,
      refreshToken: undefined,
    }

// const initialState: AuthState = { user: undefined, accessToken: undefined, refreshToken: undefined }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const { user, accessToken, refreshToken } = action.payload
      state.user = user
      state.accessToken = accessToken
      state.refreshToken = refreshToken
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logOut: (state) => {
      state.user = undefined
      state.accessToken = undefined
      state.refreshToken = undefined
      localStorage.removeItem('userInfo')
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer
