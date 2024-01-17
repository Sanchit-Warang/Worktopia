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
  profile_pic: string
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
  profile_pic: string
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
  skills: string[]
  profile_pic: File | undefined
  resume: File | undefined
}

type JobPostFormValues = {
  organization_id: number
  role: string
  description: string
  experience: number
  type: string
  salary: number
  skills: string[]
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
  profile_pic: File | undefined
}

type JobProfile = {
  id: number
  organization_profile_pic: string
  organization_name: string
  role: string
  required_experience: number
  employee_type: string
  salary: number
  job_description: string
  created_at: string
  skills_required: string[]
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
  JobProfile,
  JobPostFormValues
}
