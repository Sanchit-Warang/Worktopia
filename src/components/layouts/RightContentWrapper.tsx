'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@nextui-org/react'
import AvatarAndLogin from '../AvatarAndLogin'

import { useTheme } from 'next-themes'

const RightContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="md:block hidden h-[100dvh] max-w-[22%] min-w-[22%] border-x-1 border-borderr">
      <div className="flex p-2 items-center border-b-1 border-borderr">
        <AvatarAndLogin />
        <div className="flex ml-auto items-center">
          <FontAwesomeIcon icon={faBell} className="" />
          <Button
            isIconOnly
            className="ml-1"
            variant="light"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light')
            }}
          >
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faMoon} className="text-copy-light" />
            ) : (
              <FontAwesomeIcon icon={faSun} className="text-copy-light" />
            )}
          </Button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default RightContentWrapper
