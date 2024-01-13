'use client'
import { Card, Avatar } from '@nextui-org/react'
import { JobSeekerUser } from '@/types/types'
import Skills from './Skills'
import Link from 'next/link'

type Props = {
  user: JobSeekerUser
}
const UserCard = ({ user }: Props) => {
  return (
    <Link href={`/users/${user.username}`}>
    <Card className="w-full bg-card-bg bg-opacity-50">
      <div className="flex gap-2 p-3 items-center ml-1 border-b-1 border-borderr">
        <Avatar isBordered color='primary' src={user.profile_pic}/>
        <div>
          <div>{user.firstname} {user.lastname}</div>
          <div className="text-copy-lighter text-sm">@{user.username}</div>
        </div>
      </div>
      <div className="h-20 overflow-y-auto text-xs p-3 scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive mb-1 text-justify">
        {user.description}
      </div>
      <div className='my-1 px-3'>
      <Skills delay={0.3} skills={user.skills} all={false}/>
      </div>
    </Card>
    </Link>
  )
}

export default UserCard
