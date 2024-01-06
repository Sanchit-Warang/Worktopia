'use client'
import { ScrollShadow, CircularProgress } from '@nextui-org/react'
import UserCard from './UserCard'
import { useGetUsersQuery } from '@/redux/features/users/usersApiSlice'
import { motion } from 'framer-motion'
import useGetUserAndType from '@/hooks/useGetUserAndType'

const UsersList = () => {
  let { data: users, isLoading, isError } = useGetUsersQuery('')
  const { user: user1 } = useGetUserAndType()

  if (user1 && users) {
    users = users.filter((user) => user.username !== user1.username)
  }

  if (isLoading) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (isError) {
    return <div>error</div>
  }

  return (
      <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-6 py-6 px-10">
        {users &&
          users.map((user, i) => {
            return (
              <motion.div
                key={user.id}
                initial={{
                  opacity: 0,
                  translateX: i % 2 === 0 ? -1 * 15 : 15,
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                }}
                transition={{ duration: 0.3, delay: i * 0.3 }}
              >
                <UserCard user={user} />
              </motion.div>
            )
          })}
      </div>
  )
}

export default UsersList
