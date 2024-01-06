'use client'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
  Button,
} from '@nextui-org/react'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { logOut } from '@/redux/features/auth/authSlice'
import { apiSlice } from '@/redux/api/apiSlice'

const AvatarAndLogin = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { user, userType } = useGetUserAndType()

  let color: 'default' | 'primary' | 'secondary' = 'default'

  if (user) {
    if (userType === 'Seeker') {
      color = 'primary'
    } else {
      color = 'secondary'
    }
  }

  const handleLogout = () => {
    dispatch(logOut())
    dispatch(apiSlice.util.resetApiState())
    router.replace('/')
  }

  return (
    <div className="flex items-center">
      <Popover showArrow placement="bottom">
        <PopoverTrigger>
          <Avatar
            isBordered
            color={color}
            src={
              user
                ? user.profile_pic
                : 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg'
            }
            className="mr-2"
          />
        </PopoverTrigger>
        <PopoverContent className="p-5">
          <Button
            size="sm"
            color="danger"
            variant="shadow"
            onClick={() => {
              handleLogout()
            }}
          >
            Logout
          </Button>
        </PopoverContent>
      </Popover>
      {user ? (
        user.username
      ) : (
        <Button
          size="sm"
          color="primary"
          variant="light"
          onClick={() => {
            router.replace('/login')
          }}
        >
          Login
        </Button>
      )}
    </div>
  )
}

export default AvatarAndLogin
