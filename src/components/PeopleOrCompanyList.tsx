'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardBody, Avatar, Skeleton } from '@nextui-org/react'
import { JobSeekerUser, OrganizationUser } from '@/types/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

const UserCard = ({ user }: { user: JobSeekerUser | OrganizationUser }) => {
  return (
    <Link
      href={
        'name' in user
          ? `/companies/${user.username}`
          : `/users/${user.username}`
      }
    >
      <Card className="mx-1 bg-card-bg mb-1">
        <CardBody className="m-0 p-0">
          <div className="flex pt-1 pl-1 pr-1 items-center text-sm">
            <Avatar
              isBordered
              color={'name' in user ? 'secondary' : 'primary'}
              size="sm"
              className="mr-2"
              src={user.profile_pic}
            />
            <div>
              <b>{user.username}</b>
            </div>
          </div>
          <div>
            <p className="text-xs p-1 truncate">
              {'description' in user ? user.description : user.overview}
            </p>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

const PeopleOrCompanyList = ({
  data,
  heading,
}: {
  data: JobSeekerUser[] | OrganizationUser[] | undefined
  heading: 'People' | 'Companies'
}) => {
  const router = useRouter()

  let content = <></>

  if (data) {
    content = (
      <>
        {data.slice(0, 3).map((user) => (
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
        <p className="mr-auto">{heading} on Jobcom</p>
        <Button
          className="ml-auto h-[2em]"
          isIconOnly
          variant="light"
          onClick={() => {
            router.replace(`/${heading === 'People' ? 'users' : 'companies'}`)
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} className="" />
        </Button>
      </div>
      {content}
    </div>
  )
}

export default PeopleOrCompanyList
