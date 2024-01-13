'use client'
import { CircularProgress, Avatar } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Skills from '@/components/Skills'
import { useGetUserQuery } from '@/redux/features/users/usersApiSlice'
import HeadingWrapper from './layouts/HeadingWrapper'
import ScrollableContentWrapper from './layouts/ScrollableContentWrapper'

type Props = {
  userId: string | string[]
}

const UserDetails = ({ userId }: Props) => {
  const { data: user, isLoading, error } = useGetUserQuery(userId)

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

  return (
    <>
      <HeadingWrapper h={'8%'}>
        <div className="items-center p-3 border-b-1 border-borderr">
          <span className="text-2xl">@{user.username}</span>
        </div>
      </HeadingWrapper>
      <ScrollableContentWrapper h={'92%'}>
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
          <p className='text-justify'>{user.description}</p>
        </div>
      </ScrollableContentWrapper>
    </>
  )
}

export default UserDetails
