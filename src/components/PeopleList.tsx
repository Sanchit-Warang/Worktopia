'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardBody, Avatar, Skeleton } from '@nextui-org/react'
import { useGetUsersQuery } from '@/redux/features/users/usersApiSlice'
import { JobSeekerUser } from '@/types/types'

const LoadingCard = () => {
  return (
    <Card className="mx-1 bg-card-bg bg-opacity-50 mb-1">
      <CardBody className="m-0 p-0">
        <div className="flex pt-1 pl-1 pr-1 items-center text-sm">
          <Skeleton className="rounded-lg mr-2">
            <Avatar size="sm" className="mr-2" />
          </Skeleton>
          <div>
            <Skeleton className="rounded-lg">
              <b>Username</b>
            </Skeleton>
          </div>
        </div>
        <div>
          <p className="text-xs p-1 truncate">
            <Skeleton className="rounded-lg">
              First-year undergrad at Indian Institute of Information
            </Skeleton>
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

const UserCard = ({ user }: { user: JobSeekerUser }) => {
  return (
    <Card className="mx-1 bg-card-bg mb-1">
      <CardBody className="m-0 p-0">
        <div className="flex pt-1 pl-1 pr-1 items-center text-sm">
          <Avatar
            isBordered
            color="primary"
            size="sm"
            className="mr-2"
            src={user.profile_pic}
          />
          <div>
            <b>{user.username}</b>
          </div>
        </div>
        <div>
          <p className="text-xs p-1 truncate">{user.description}</p>
        </div>
      </CardBody>
    </Card>
  )
}

const PeopleList = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery('')

  let content = <></>

  if (users) {
    content = (
      <>
        {users.slice(0, 3).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </>
    )
  } else {
    content = (
      <>
        {[1, 2, 3].map((n) => (
          <LoadingCard key={n} />
        ))}
      </>
    )
  }

  return (
    <div className="border-b-1 border-borderr">
      <div className="p-3 flex items-center mb-2">
        <p className="mr-auto">People on Jobcom</p>
        <Button className="ml-auto h-[2em]" isIconOnly variant="light">
          <FontAwesomeIcon icon={faArrowRight} className="" />
        </Button>
      </div>
      {content}
    </div>
  )
}

export default PeopleList
