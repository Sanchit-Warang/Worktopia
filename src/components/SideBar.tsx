import React from 'react'
import Image from 'next/image'
import { AcmeLogo } from '@/components/icons/AcmeLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faUsers,
  faBuilding,
  faHandshake,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { Listbox, ListboxItem } from '@nextui-org/react'
import { useTheme } from 'next-themes'

const SideBar = () => {
  const router = useRouter()
  const { theme } = useTheme()
  return (
    <div className="h-[100vh] w-[30%] p-1 border-x-1 border-borderr text-lg">
      <div className="flex justify-center pt-2">
        <Image src={'/images/worktopia2.png'} alt='logo' width={100} height={100}/>
        {/* <AcmeLogo className="w-[23%]" />
        <h1>AI Recruter</h1> */}
      </div>
      <div className="">
        <Listbox
          className=""
          variant="shadow"
          color="primary"
          aria-label="Actions"
          onAction={(key) => {
            router.replace(`/${key}`)
          }}
        >
          <ListboxItem
            key="job-list"
            startContent={<FontAwesomeIcon icon={faBriefcase} className="" />}
            className="my-1 py-3 bg-primary-inactive"
          >
            JobList
          </ListboxItem>
          <ListboxItem
            key="users"
            className="my-1 py-3 bg-primary-inactive"
            startContent={<FontAwesomeIcon icon={faUsers} className="" />}
          >
            People
          </ListboxItem>
          <ListboxItem
            key="companies"
            className="my-1 py-3 bg-primary-inactive"
            startContent={<FontAwesomeIcon icon={faBuilding} className="" />}
          >
            Company
          </ListboxItem>
          <ListboxItem
            key="4"
            className="my-1 py-3 bg-primary-inactive"
            startContent={<FontAwesomeIcon icon={faHandshake} className="" />}
          >
            Connections
          </ListboxItem>
          <ListboxItem
            key="5"
            className="my-1 py-3 bg-primary-inactive"
            startContent={<FontAwesomeIcon icon={faUser} className="" />}
          >
            Username
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  )
}

export default SideBar
