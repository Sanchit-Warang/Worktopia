'use client'
import { redirect } from 'next/navigation'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { useEffect } from 'react'

export const WithAuthOrg = (Component: any) => {
  return function WithAuthOrg(props: any) {
    const { user, userType } = useGetUserAndType()
    useEffect(() => {
      if (!user) {
        redirect('/login')
      }
      if (user && userType === 'Seeker') {
        redirect('/job-list')
      }
    }, [user, userType])
    return <Component {...props} />
  }
}
