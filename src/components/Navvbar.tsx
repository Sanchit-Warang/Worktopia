'use client'

// import { useClient } from 'next/client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from '@nextui-org/react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faBuilding,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { AcmeLogo } from '@/components/icons/AcmeLogo'
import next from 'next/types'

type Props = {
  modeToggle: () => void
  mode: 'light' | 'dark'
}

export default function Navvbar({ modeToggle, mode }: Props) {
  // const client = useClient()

  const router = useRouter()
  const handleModeToggle = (): void => {
    modeToggle()
  }

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand as={Link} href="/">
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown>
          <NavbarItem className="hidden lg:flex">
            <DropdownTrigger>
              <Button variant="light">Login</Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Login options"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              // as={Link}
              // href='/seeker-login'
              key="login"
              description="login as a seeker"
              startContent={<FontAwesomeIcon icon={faUser} beat />}
              onClick={() => router.replace('/seeker-login')}
            >
              Seeker Login
            </DropdownItem>
            <DropdownItem
              // as={Link}
              // herf='/temp'
              key="organization-login"
              description="login as an organization"
              startContent={<FontAwesomeIcon icon={faBuilding} beat />}
              onClick={() => router.replace('/organization-login')}
            >
              Organization Login
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly variant="light" onClick={handleModeToggle}>
            {mode === 'dark' ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
