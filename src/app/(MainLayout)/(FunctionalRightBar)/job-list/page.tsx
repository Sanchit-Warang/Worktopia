'use client'
import MainContentWrapper from '@/components/layouts/MainContentWrapper'
import RightContentWrapper from '@/components/layouts/RightContentWrapper'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import JobFilters from '@/components/JobFilters'
import JobList from '@/components/JobList'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faSort,
  faFilter,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import JobsAppliedAndPostedTabs from '@/components/ui/JobsAppliedAndPostedTabs'

type Filters = {
  search: string
  role: string
  required_experience__lte: string
  organization__name: string
  salary__lte: string
}

type Sort = 'recent' | 'lowToHigh' | 'highToLow'

const Page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
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
        <HeadingWrapper h={'21%'}>
          <span>Jobs</span>
          <div className="ml-auto">
            <Button
              // className="md:hidden"
              size="sm"
              color="secondary"
              variant="light"
              onClick={onOpen}
              className='md:hidden'
            >
              <FontAwesomeIcon icon={faFilter} className="mr-1" />
              <span>Filter</span>
            </Button>
            <Dropdown>
              <DropdownTrigger>
                <Button className="" size="sm" color="primary" variant="light">
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
        </HeadingWrapper>
        <div className="py-2">
          <div className="w-[90%] mx-auto">
            <Input
              name="search"
              type="text"
              isClearable
              size="sm"
              // labelPlacement='outside-left'
              value={filters.search}
              onChange={handleInputChange}
              color="primary"
              label="Search"
              endContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            />
          </div>
        </div>
        <JobsAppliedAndPostedTabs />
        <ScrollableContentWrapper h={'79%'}>
          <JobList filters={filters} sort={sort} />
        </ScrollableContentWrapper>
        <Modal placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="">
                  <JobFilters
                    filters={filters}
                    handleInputChange={handleInputChange}
                    setFilters={setFilters}
                  />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </MainContentWrapper>
      <RightContentWrapper>
        <JobFilters
          filters={filters}
          handleInputChange={handleInputChange}
          setFilters={setFilters}
        />
      </RightContentWrapper>
    </>
  )
}

export default Page
