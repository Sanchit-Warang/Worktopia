'use client'
import MainContentWrapper from '@/components/layouts/MainContentWrapper'
import RighitContentWrapper from '@/components/layouts/RightContentWrapper'
import JobFilters from '@/components/JobFilters'
import JobList from '@/components/JobList'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
  ScrollShadow
} from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSort } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

type Filters = {
  search: string
  role: string
  required_experience__lte: string
  organization__name: string
  salary__lte: string
}

type Sort = 'recent' | 'lowToHigh' | 'highToLow'

const Page = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    role: '',
    organization__name: '',
    required_experience__lte: '10',
    salary__lte: '100',
  })

  const [sort, setSort] = useState<Sort>('recent')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <MainContentWrapper>
        <div className="10vh">
          <div className="flex items-center p-3 border-b-1 border-borderr">
            <span>Jobs</span>
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
                onAction={(key) => {
                  if (
                    key === 'recent' ||
                    key === 'lowToHigh' ||
                    key === 'highToLow'
                  ) {
                    setSort(key)
                  }
                }}
              >
                <DropdownItem key="recent">Recent</DropdownItem>
                <DropdownItem key="lowToHigh">Salary Low-High</DropdownItem>
                <DropdownItem key="highToLow">Salary High-Low</DropdownItem>
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
                value={filters.search}
                onChange={handleInputChange}
                color="primary"
                label="Search"
                endContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              />
            </div>
          </div>
        </div>
        <div>
          <ScrollShadow
            size={100}
            className="h-[83vh] scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-primary-inactive"
          >
            <JobList filters={filters} sort={sort} />
          </ScrollShadow>
        </div>
      </MainContentWrapper>
      <RighitContentWrapper>
        <JobFilters
          filters={filters}
          handleInputChange={handleInputChange}
          setFilters={setFilters}
        />
      </RighitContentWrapper>
    </>
    // <div className="grid grid-cols-10">
    //     <div className='col-span-2'></div>
    //     <ScrollShadow className='col-span-6 border-x-2 border-stone-500 h-[93vh] w-[100%]'>
    //         <JobList/>
    //     </ScrollShadow>
    //     <div className='col-span-2'></div>
    // </div>
  )
}

export default Page
