'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
  Link,
  Button,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBuilding, faMoon } from '@fortawesome/free-solid-svg-icons'

import { AcmeLogo } from '@/components/icons/AcmeLogo'

import { useDispatch } from 'react-redux'
import { toggleTheme } from '@/redux/features/theme/themeSlice'

export default function App() {
    const dispatch = useDispatch()

   const handleThemeToggle = ():void => {
    dispatch(toggleTheme())
   } 

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
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
              <Link href="#">Login</Link>
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
              key="login"
              description="login as a seeker"
              startContent={<FontAwesomeIcon icon={faUser} beat />}
            >
              Seeker Login
            </DropdownItem>
            <DropdownItem
              key="organization-login"
              description="login as an organization"
              startContent={<FontAwesomeIcon icon={faBuilding} beat />}
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
        <Button isIconOnly>
           <FontAwesomeIcon icon={faMoon} />
        </Button> 
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
