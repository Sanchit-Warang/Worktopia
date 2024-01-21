'use client'
import { redirect } from 'next/navigation'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export const WithAuthSeeker = (Component: any) => {
  return function WithAuthSeeker(props: any) {
    const { user, userType } = useGetUserAndType()
    useEffect(() => {
      if (!user) {
        redirect('/login')  
      }
      if (user && userType === 'Organization') {
        redirect('/job-list')
      }
    }, [user, userType])
    return <Component {...props} />
  }
}
