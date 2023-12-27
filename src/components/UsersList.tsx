'use client'
import { ScrollShadow, CircularProgress } from '@nextui-org/react'
import UserCard from './UserCard'
import { useGetUsersQuery } from '@/redux/features/users/usersApiSlice'
import { motion } from 'framer-motion'

const UsersList = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery('')

  if (isLoading) {
    return (
      <div className=" h-[83vh] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (isError) {
    return <div>error</div>
  }

  return (
    <ScrollShadow
      size={100}
      className="h-[83vh] scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive"
    >
      <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-6 py-6 px-10">
        {users &&
          users.map((user, i) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, translateX: i % 2 === 0 ? -1 * 15 : 15 }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{ duration: 0.3, delay: i * 0.3 }}
            >
              <UserCard user={user} />
            </motion.div>
          ))}
      </div>
    </ScrollShadow>
  )
}

export default UsersList
