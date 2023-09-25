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

type LoginFormValues = {
  username: string
  password: string
}



type ThemeState = {
  mode: 'dark' | 'light'
}


type GlobalState = {
  auth: AuthState
  theme: ThemeState
}

export type { User, AuthState, RootState, LoginFormValues, ThemeState, GlobalState }
