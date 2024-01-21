import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faUsers,
  faBuilding,
  faHandshake,
  faUser,
} from '@fortawesome/free-solid-svg-icons'


import Link from 'next/link'

const SideBarBottom = () => {
  return (
    <div className="h-[7dvh] w-full flex flex-col justify-center sm:block md:hidden border-t-1 border-borderr py-2">
      <div className="w-full flex gap-4 justify-center items-center">
        <Link className='p-3 bg-primary-inactive rounded hover:bg-primary' href={'/job-list'}>
          <FontAwesomeIcon icon={faBriefcase} className="" />
        </Link>
        <Link className='p-3 bg-primary-inactive rounded hover:bg-primary' href={'/users'}>
          <FontAwesomeIcon icon={faUsers} className="" />
        </Link>
        <Link className='p-3 bg-primary-inactive rounded hover:bg-primary' href={'/companies'}>
          <FontAwesomeIcon icon={faBuilding} className="" />
        </Link>
        <Link className='p-3 bg-primary-inactive rounded hover:bg-primary' href={'/job-list'}>
          <FontAwesomeIcon icon={faHandshake} className="" />
        </Link>
        <Link className='p-3 bg-primary-inactive rounded hover:bg-primary' href={'/job-list'}>
          <FontAwesomeIcon icon={faUser} className="" />
        </Link>
      </div>
      {/* <Listbox
        className="w-full flex flex-col justify-center"
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
      </Listbox> */}
    </div>
  )
}

export default SideBarBottom
