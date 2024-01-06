'use client'
import { useAppSelector } from '@/redux/hooks'

const useGetUserAndType = () => {
  const user = useAppSelector((state) => {
    return state.auth.user
  })

  let userType: 'Organization' | 'Seeker' | null = null

  if (user) {
    userType = 'name' in user ? 'Organization' : 'Seeker'
  }

  return { user, userType }
}

export default useGetUserAndType
