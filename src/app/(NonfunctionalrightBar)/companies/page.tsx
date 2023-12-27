'use client'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
} from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import CompaniesList from '@/components/CompaniesList'

const CompaniesPage = () => {
  return (
    <div className="10vh">
      <div className="flex items-center p-3 border-b-1 border-borderr">
        <span>Companies</span>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="ml-auto"
              size="sm"
              color="primary"
              variant="light"
            >
              <FontAwesomeIcon icon={faSort} className="mr-1" />
              <span>Sort</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Jobs Sort"
            // onAction={(key) => {
            //   if (
            //     key === 'recent' ||
            //     key === 'lowToHigh' ||
            //     key === 'highToLow'
            //   ) {
            //     setSort(key)
            //   }
            // }}
          >
            <DropdownItem key="recent">Recent</DropdownItem>
            <DropdownItem key="lowToHigh">Salary Low-High</DropdownItem>
            <DropdownItem key="highToLow">Salary Low-High</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className=" border-borderr border-b-2 py-2">
        <div className="w-[90%] mx-auto">
          <Input
            name="search"
            type="text"
            isClearable
            size="sm"
            // value={filters.search}
            // onChange={handleInputChange}
            color="primary"
            label="Search"
            endContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
        </div>
      </div>
      <CompaniesList />
    </div>
  )
}

export default CompaniesPage
