type JobSeekerUser = {
  description: string
  email: string
  firstname: string
  id: number
  lastname: string
  no_of_years_experience: number
  phone_number: string
  resume: string
  skills: string[]
  username: string
}

type OrganizationUser = {
  email: string
  founded_at: string
  id: number
  location: string
  name: string
  overview: string
  username: string
  website: string
}

type AuthState = {
  accessToken: string | undefined
  refreshToken: string | undefined
  user: JobSeekerUser | OrganizationUser | undefined
}

type RootState = {
  auth: AuthState
}

type LoginFormValues = {
  email: string
  password: string
}

type ThemeState = {
  mode: 'dark' | 'light'
}

type GlobalState = {
  auth: AuthState
  theme: ThemeState
}

type SeekerRegistrationFromValues = {
  username: string
  email: string
  password: string
  firstname: string
  lastname: string
  description: string
  no_of_years_experience: number
  phone_number: string
}

type OrgRegistrationFromValues = {
  username: string
  email: string
  password: string
  location: string
  name: string
  website: string
  overview: string
  founded_at: string
}

export type {
  JobSeekerUser,
  AuthState,
  RootState,
  LoginFormValues,
  ThemeState,
  GlobalState,
  SeekerRegistrationFromValues,
  OrganizationUser,
  OrgRegistrationFromValues,
}
