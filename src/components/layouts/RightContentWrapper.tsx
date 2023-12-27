'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Button } from '@nextui-org/react'

import { useTheme } from 'next-themes'

const RightContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="h-[100vh] max-w-[22%] min-w-[22%] border-x-1 border-borderr">
      <div className="flex p-2 items-center border-b-1 border-borderr">
        <div className="flex items-center">
          {/* <FontAwesomeIcon icon={faUser} className=" pr-2" />
           */}
          <Avatar
            src="https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg"
            className="mr-2"
          />
          Username
        </div>
        <div className="flex ml-auto items-center">
          <FontAwesomeIcon icon={faBell} className="" />
          <Button
            isIconOnly
            className="ml-1"
            variant="light"
            onClick={() => {
              setTheme(theme === 'my-light' ? 'my-dark' : 'my-light')
            }}
          >
            <FontAwesomeIcon icon={faSun} />
          </Button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default RightContentWrapper
