'use client'
import { Card, Avatar, Button } from '@nextui-org/react'
import { JobSeekerUser } from '@/types/types'
import { usePathname } from 'next/navigation'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  useAcceptConnectionRequestMutation,
  useDeleteConnectionRequestMutation,
} from '@/redux/features/connections/connectionsApiSlice'
import toast from 'react-hot-toast'

import Skills from './Skills'
import Link from 'next/link'

type Props = {
  user: JobSeekerUser
}
const UserCard = ({ user }: Props) => {
  const path = usePathname()

  const [
    acceptConnectionRequest,
    { isLoading: acceptConnectionRequestIsLoading },
  ] = useAcceptConnectionRequestMutation()

  const [
    deleteConnectionRequest,
    { isLoading: deleteConnectionRequestIsLoading },
  ] = useDeleteConnectionRequestMutation()

  const showAcceptAndReject = path === '/connections/received'

  const showReject = path === '/connections/connections'

  const handleAcceptClick = async () => {
    try {
      await acceptConnectionRequest(user.id.toString())
      toast.success('Accept successful')
    } catch (error: any) {
      console.log(error)
      toast.error(error?.data?.error ?? 'Something went wrong')
    }
  }

  const handleDeleteClick = async () => {
    try {
      await deleteConnectionRequest(user.id.toString())
      toast.success('Delete successful')
    } catch (error: any) {
      console.log(error)
      toast.error(error?.data?.error ?? 'Something went wrong')
    }
  }

  return (
    <Link href={`/users/${user.username}`}>
      <Card className="w-full bg-card-bg bg-opacity-50">
        <div className="flex gap-2 p-3 items-center ml-1 border-b-1 border-borderr">
          <Avatar isBordered color="primary" src={user.profile_pic} />
          <div>
            <div>
              {user.firstname} {user.lastname}
            </div>
            <div className="text-copy-lighter text-sm">@{user.username}</div>
          </div>
          {showAcceptAndReject && (
            <div className="ml-auto">
              <Button
                isIconOnly
                size="sm"
                color="success"
                variant="light"
                isDisabled={
                  acceptConnectionRequestIsLoading ||
                  deleteConnectionRequestIsLoading
                }
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleAcceptClick()
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button
                isIconOnly
                size="sm"
                color="danger"
                variant="light"
                isDisabled={
                  acceptConnectionRequestIsLoading ||
                  deleteConnectionRequestIsLoading
                }
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleDeleteClick()
                }}
              >
                <FontAwesomeIcon icon={faX} />
              </Button>
            </div>
          )}
          {showReject && (
            <div className="ml-auto">
              <Button
                isIconOnly
                size="sm"
                color="danger"
                variant="light"
                isDisabled={
                  acceptConnectionRequestIsLoading ||
                  deleteConnectionRequestIsLoading
                }
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleDeleteClick()
                }}
              >
                <FontAwesomeIcon icon={faX} />
              </Button>
            </div>
          )}
        </div>
        <div className="h-20 overflow-y-auto text-xs p-3 scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive mb-1 text-justify">
          {user.description}
        </div>
        <div className="my-1 px-3">
          <Skills delay={0.3} skills={user.skills} all={false} />
        </div>
      </Card>
    </Link>
  )
}

export default UserCard
