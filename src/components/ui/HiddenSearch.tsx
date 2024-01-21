'use client'
import { Input } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const HiddenSearch = () => {
  return (
    <div className="py-2 invisible">
      <div className="w-[90%] mx-auto">
        <Input
          name="search"
          type="text"
          isClearable
          size="sm"
          // labelPlacement='outside-left'
          //   value={filters.search}
          //   onChange={handleInputChange}
          color="primary"
          label="Search"
          endContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
      </div>
    </div>
  )
}

export default HiddenSearch
