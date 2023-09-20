type User = {
  email: string
}

type AuthState = {
  token: string | null
  user: User | null
}

type RootState = {
  auth: AuthState
}


export type {User, AuthState, RootState} 