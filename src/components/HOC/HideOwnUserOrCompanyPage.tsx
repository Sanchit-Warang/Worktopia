import { redirect } from 'next/navigation'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export const HideOwnUserOrCompanyPage = (Component: any) => {
  return function HideOwnUserOrCompanyPage(props: any) {
    const { Id } = useParams()
    const { user } = useGetUserAndType()
    useEffect(() => {
      if (user) {
        if (Id === user.username) {
          redirect('/job-list')
        }
      }
    }, [user, Id])
    return <Component {...props} />
  }
}
