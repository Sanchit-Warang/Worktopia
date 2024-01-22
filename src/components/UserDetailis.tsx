'use client'
import { CircularProgress, Avatar, Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faUserPlus,
  faCheck,
  faClock,
  faUserXmark
} from '@fortawesome/free-solid-svg-icons'
import Skills from '@/components/Skills'
import { useGetUserQuery } from '@/redux/features/users/usersApiSlice'
import HeadingWrapper from './layouts/HeadingWrapper'
import ScrollableContentWrapper from './layouts/ScrollableContentWrapper'
import {
  useCreateConnectionRequestMutation,
  useGetHasConnectedQuery,
  useDeleteConnectionRequestMutation,
} from '@/redux/features/connections/connectionsApiSlice'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import HiddenSortButton from './ui/HiddenSortButton'
import toast from 'react-hot-toast'

type Props = {
  userId: string | string[]
}

const UserDetails = ({ userId }: Props) => {
  const u = useGetUserAndType()
  const { data: user, isLoading, error } = useGetUserQuery(userId)
  const userIdAsString = Array.isArray(userId) ? userId[0] : userId
  const hasConnection = useGetHasConnectedQuery(userIdAsString)
  const [createConnection, { isLoading: connectionLoading }] =
    useCreateConnectionRequestMutation()
  const [
    deleteConnectionRequest,
    { isLoading: deleteConnectionRequestIsLoading },
  ] = useDeleteConnectionRequestMutation()

  if (isLoading) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (error || user === undefined) {
    return <div>{JSON.stringify(error)}</div>
  }

  let followButton: JSX.Element | null = null

  const handleFollowClick = async () => {
    try {
      await createConnection({
        user1: u.user ? u.user.id : -1,
        user2: user.id,
      })
      hasConnection.refetch()
      toast.success('Request Sent')
    } catch (error: any) {
      console.log(error)
      toast.error(error?.data?.error ?? 'Something went wrong')
    }
  }

  const handleDeleteClick = async () => {
    try {
      await deleteConnectionRequest(user.id.toString())
      hasConnection.refetch()
      toast.success('Delete successful')
    } catch (error: any) {
      console.log(error)
      toast.error(error?.data?.error ?? 'Something went wrong')
    }
  }

  if (u.userType === 'Seeker' && hasConnection.data) {
    if (!hasConnection.data.connection_status) {
      followButton = (
        <Button
          className="h-[1.5rem]"
          color="success"
          variant="shadow"
          isDisabled={
            hasConnection.data.connection_status === 'accepted' ||
            hasConnection.data.connection_status === 'pending'
          }
          startContent={<FontAwesomeIcon icon={faUserPlus} />}
          isLoading={connectionLoading}
          onClick={() => {
            handleFollowClick()
          }}
        >
          Follow
        </Button>
      )
    } else if (hasConnection.data.connection_status === 'accepted') {
      followButton = (
        <>
          <Button
            className="h-[1.5rem]"
            color="success"
            variant="flat"
            isDisabled={hasConnection.data.connection_status === 'accepted'}
            startContent={<FontAwesomeIcon icon={faCheck} />}
          >
            Following
          </Button>
          <Button
            isIconOnly
            size="sm"
            color="danger"
            variant="light"
            isDisabled={deleteConnectionRequestIsLoading}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleDeleteClick()
            }}
          >
            <FontAwesomeIcon icon={faUserXmark} />
          </Button>
        </>
      )
    } else if (hasConnection.data.connection_status === 'pending') {
      followButton = (
        <Button
          className="h-[1.5rem]"
          color="success"
          variant="flat"
          isDisabled={hasConnection.data.connection_status === 'pending'}
          startContent={<FontAwesomeIcon icon={faClock} />}
        >
          Pending
        </Button>
      )
    } else if (hasConnection.data.connection_status === 'Requested') {
      followButton = (
        <Button
          className="h-[1.5rem]"
          color="success"
          variant="flat"
          isDisabled={hasConnection.data.connection_status === 'Requested'}
          startContent={<FontAwesomeIcon icon={faClock} />}
        >
          Requested
        </Button>
      )
    }
  }

  return (
    <>
      <HeadingWrapper>
        <span>@{user.username}</span>
        <HiddenSortButton />
      </HeadingWrapper>
      <ScrollableContentWrapper>
        <div className="bg-card-bg p-6">
          <div className="flex flex-col items-center mx-[15%]">
            <div className="my-2">
              <Avatar
                isBordered
                color="primary"
                radius="md"
                className="w-20 h-20"
                src={user.profile_pic}
              />
            </div>
            <div className="text-3xl my-1">
              <p>{user.username}</p>
            </div>
            <div className="my-1">
              {/* {hasConnection.data?.connection_status} */}
              {followButton}
            </div>
            <div className="text-lg my-1">
              <p>
                {user.firstname} {user.lastname}
              </p>
            </div>
            <div className="text-md my-1">
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> {user.email}
              </p>
            </div>
            <div className="text-sm text-copy-lighter my-1">
              <p>
                Professional Experience
                {user.no_of_years_experience === 0
                  ? ' Fresher'
                  : ` of ${user.no_of_years_experience} years`}
              </p>
            </div>
            <div className="my-1">
              <Skills
                skills={user.skills}
                all={true}
                delay={0}
                className="justify-center"
              />
            </div>
          </div>
        </div>
        <div className="mt-6  mx-10">
          <div className="text-lg text-center">About {user.username}</div>
          <br />
          <p className="text-justify">{user.description}</p>
        </div>
      </ScrollableContentWrapper>
    </>
  )
}

export default UserDetails
