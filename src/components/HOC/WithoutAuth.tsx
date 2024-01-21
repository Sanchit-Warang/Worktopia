'use client'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/types/types'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export const WithoutAuth = (Component: any) => {
  return function WithoutAuth(props: any) {
    const user = useSelector((state: RootState) => {
      if (state.auth.user) {
        return state.auth.user
      } else {
        return null
      }
    })
    useEffect(() => {
      if (user) {
        redirect('/')
      }
    }, [user])

    if (user) {
      return null
    }

    return <Component {...props} />
  }
}
