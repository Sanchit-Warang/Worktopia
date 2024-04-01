import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faUsers,
  faBuilding,
  faHandshake,
  faUser,
  faSheetPlastic,
} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { Listbox, ListboxItem } from '@nextui-org/react'

const SideBar = () => {
  const { user, userType } = useGetUserAndType()
  const router = useRouter()
  return (
    <div className="md:block hidden h-[100dvh] w-[30%] p-1 border-x-1 border-borderr text-lg">
      <div className="flex justify-center pt-2">
        <Link href={'/'}>
          <Image
            src={'/images/worktopia2.png'}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
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
            key="company/jobposting"
            className={`my-1 py-3 bg-primary-inactive ${
              userType === 'Organization' ? '' : 'hidden'
            }`}
            // className="my-1 py-3 bg-primary-inactive"
            startContent={
              <FontAwesomeIcon icon={faSheetPlastic} className="" />
            }
          >
            Post a Job
          </ListboxItem>
          <ListboxItem
            key="connections/connections"
            className={`my-1 py-3 bg-primary-inactive ${
              userType === 'Seeker' ? '' : 'hidden'
            }`}
            startContent={<FontAwesomeIcon icon={faHandshake} className="" />}
          >
            Connections
          </ListboxItem>
          <ListboxItem
            key="5"
            className="my-1 py-3 bg-primary-inactive hidden"
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
