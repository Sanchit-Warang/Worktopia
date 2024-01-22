import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faUsers,
  faBuilding,
  faHandshake,
  faSheetPlastic,
  faBars,
  faMoon,
  faSun,
  faCompress,
  faExpand,
} from '@fortawesome/free-solid-svg-icons'
import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Switch,
} from '@nextui-org/react'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { useAppDispatch } from '@/redux/hooks'
import { logOut } from '@/redux/features/auth/authSlice'
import { apiSlice } from '@/redux/api/apiSlice'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useFullscreen } from '@mantine/hooks'

import Link from 'next/link'

const SideBarBottom = () => {
  const { theme, setTheme } = useTheme()
  const { toggle, fullscreen } = useFullscreen()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useGetUserAndType()
  return (
    <div className="h-[7dvh] w-full flex flex-col justify-center sm:block md:hidden border-t-1 border-borderr py-2">
      <div className="w-full flex gap-4 justify-center items-center">
        <Link href={'/job-list'}>
          <Avatar
            className="bg-primary-inactive hover:bg-primary"
            fallback={<FontAwesomeIcon icon={faBriefcase} className="" />}
          />
        </Link>
        <Link href={'/users'}>
          <Avatar
            className="bg-primary-inactive hover:bg-primary"
            fallback={<FontAwesomeIcon icon={faUsers} className="" />}
          />
        </Link>
        <Link href={'/companies'}>
          <Avatar
            className="bg-primary-inactive hover:bg-primary"
            fallback={<FontAwesomeIcon icon={faBuilding} className="" />}
          />
        </Link>
        {user.userType === 'Seeker' && (
          <Link href={'connections/connections'}>
            <Avatar
              className="bg-primary-inactive hover:bg-primary"
              fallback={<FontAwesomeIcon icon={faHandshake} className="" />}
            />
          </Link>
        )}
        {user.userType === 'Organization' && (
          <Link href={'company/jobposting'}>
            <Avatar
              className="bg-primary-inactive hover:bg-primary"
              fallback={<FontAwesomeIcon icon={faSheetPlastic} className="" />}
            />
          </Link>
        )}
        <Popover showArrow placement="bottom">
          <PopoverTrigger>
            <Avatar
              src={
                user.user
                  ? user.user.profile_pic
                  : 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg'
              }
              className="mr-2"
            />
          </PopoverTrigger>
          <PopoverContent className="p-2">
            {user.user && (
              <Button
                size="sm"
                color="danger"
                variant="shadow"
                onClick={() => {
                  dispatch(logOut())
                  dispatch(apiSlice.util.resetApiState())
                  router.replace('/job-list')
                  toast.success('Logged out')
                }}
              >
                Logout
              </Button>
            )}
            {!user.user && (
              <Button
                size="sm"
                color="primary"
                variant="shadow"
                onClick={() => {
                  router.replace('/login')
                }}
              >
                Login
              </Button>
            )}
          </PopoverContent>
        </Popover>
        <Popover placement="top" showArrow={true}>
          <PopoverTrigger>
            <Avatar
              className="bg-primary-inactive hover:bg-primary"
              fallback={<FontAwesomeIcon icon={faBars} className="" />}
            />
          </PopoverTrigger>
          <PopoverContent className="p-2">
            <Switch
              defaultSelected
              size="sm"
              color="default"
              onChange={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
              }}
              thumbIcon={({ isSelected, className }) =>
                theme === 'light' ? (
                  <FontAwesomeIcon icon={faMoon} className={className} />
                ) : (
                  <FontAwesomeIcon icon={faSun} className={className} />
                )
              }
            />
            <Button isIconOnly variant="light" onClick={toggle}>
              {fullscreen ? (
                <FontAwesomeIcon
                  icon={faCompress}
                  className="text-copy-light"
                />
              ) : (
                <FontAwesomeIcon icon={faExpand} className="text-copy-light" />
              )}
            </Button>
            {/* HI */}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default SideBarBottom
