'use client'
import { useParams } from 'next/navigation'
import { useLayoutEffect } from 'react'
import UserDetails from '@/components/UserDetailis'
import { useRouter } from 'next/navigation'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { HideOwnUserOrCompanyPage } from '@/components/HOC/HideOwnUserOrCompanyPage'

const UserPage = () => {
  const { Id } = useParams()
  return <UserDetails userId={Id}/>
}

export default HideOwnUserOrCompanyPage(UserPage)
