import React from 'react'
import { Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

const HiddenSortButton = () => {
  return (
    <Button
      className=" invisible ml-auto"
      size="sm"
      color="primary"
      variant="light"
    >
      <FontAwesomeIcon icon={faSort} className="mr-1" />
      <span>Sort</span>
    </Button>
  )
}

export default HiddenSortButton
