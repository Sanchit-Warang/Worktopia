'use client'
import { redirect } from 'next/navigation'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { useEffect } from 'react'

export const WithAuthSeeker = (Component: any) => {
  return function WithAuthSeeker(props: any) {
    const { user, userType } = useGetUserAndType()
    useEffect(() => {
      if(!user){
        redirect('/login')
      }
      if(user && userType === 'Organization'){
        redirect('/job-list')
      }
    }, [user])
    return <Component {...props} />
  }
}
