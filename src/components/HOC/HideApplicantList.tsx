import { redirect } from 'next/navigation'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useGetJobProfileQuery } from '@/redux/features/jobProfile/jobProfileApiSlice'
import toast from 'react-hot-toast'

export const HideApplicantList = (Component: any) => {
  return function HideApplicantList(props: any) {
    const { Id } = useParams()
    const { user } = useGetUserAndType()
    const { data } = useGetJobProfileQuery(Id)
    useEffect(() => {
      if (user && 'name' in user) {
        if (data && data.organization_name !== user.name) {
          redirect('/job-list')
        }
      }
    }, [user, Id, data])
    return <Component {...props} />
  }
}
