'use client'
import { useParams } from 'next/navigation'
import { ScrollShadow, CircularProgress, Avatar } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Skills from '@/components/Skills'
import { useGetUserQuery } from '@/redux/features/users/usersApiSlice'

const UserPage = () => {
  const { userId } = useParams()
  const { data: user, isLoading, error } = useGetUserQuery(userId)

  if (isLoading) {
    return (
      <div className=" h-[100vh] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (error || user === undefined) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <>
      <div className=" h-[8vh] items-center p-3 border-b-1 border-borderr">
        <span className="text-2xl">@{user.username}</span>
      </div>
      <ScrollShadow
        size={100}
        className="h-[92vh] scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive"
      >
        <div className="bg-card-bg p-6">
          <div className="flex flex-col items-center mx-[15%]">
            <div className="my-2">
              <Avatar isBordered color='primary' radius='md' className="w-20 h-20" src={user.profile_pic} />
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
        <div className='mt-6  mx-10'>
            <div className='text-lg text-center'>About {user.username}</div>
            <br />
            <p>
              {user.description}
            </p>
        </div>
      </ScrollShadow>
    </>
  )
}

export default UserPage
