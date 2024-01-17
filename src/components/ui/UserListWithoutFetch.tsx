'use client'
import { JobSeekerUser } from '@/types/types'
import { motion } from 'framer-motion'
import UserCard from '../UserCard'

type Props = {
  users: JobSeekerUser[]
}

const UserListWithoutFetch = ({ users }: Props) => {
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

export default UserListWithoutFetch
