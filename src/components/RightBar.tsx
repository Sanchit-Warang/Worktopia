import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardBody, Avatar } from '@nextui-org/react'
import RightContentWrapper from './layouts/RightContentWrapper'

const RightBar = () => {
  
  return (
    <RightContentWrapper>
      <div className="border-b-1 border-borderr">
        <div className="p-3 flex  mb-2">
          <p className="mr-auto">People on Jobcom</p>
          <Button className="ml-auto h-[2em]" isIconOnly variant="light">
            <FontAwesomeIcon icon={faArrowRight} className="" />
          </Button>
        </div>
        <Card className="mx-1 bg-card-bg mb-1">
          <CardBody className="m-0 p-0">
            <div className="flex p-1 items-center text-sm">
              <Avatar size="sm" className="mr-1" />
              <div>
                <b>Username</b>
              </div>
            </div>
            <div>
              <p className="text-xs p-1 truncate">
                First-year undergrad at Indian Institute of Information
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="mx-1 bg-card-bg mb-1">
          <CardBody className="m-0 p-0">
            <div className="flex p-1 items-center text-sm">
              <Avatar size="sm" className="mr-1" />
              <div>
                <b>Username</b>
              </div>
            </div>
            <div>
              <p className="text-xs p-1 truncate">
                First-year undergrad at Indian Institute of Information
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="mx-1 bg-card-bg mb-1">
          <CardBody className="m-0 p-0">
            <div className="flex p-1 items-center text-sm">
              <Avatar size="sm" className="mr-1" />
              <div>
                <b>Username</b>
              </div>
            </div>
            <div>
              <p className="text-xs p-1 truncate">
                First-year undergrad at Indian Institute of Information
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="border-b-1 border-borderr">
        <div className="p-3 flex mb-2">
          <p className="mr-auto">Organizations on Jobcom</p>
          <Button className="ml-auto h-[2em]" isIconOnly variant="light">
            <FontAwesomeIcon icon={faArrowRight} className="" />
          </Button>
        </div>
        <Card className="mx-1 bg-card-bg mb-1">
          <CardBody className="m-0 p-0">
            <div className="flex p-1 items-center text-sm">
              <Avatar size="sm" className="mr-1" />
              <div>
                <b>Username</b>
              </div>
            </div>
            <div>
              <p className="text-xs p-1 truncate">
                First-year undergrad at Indian Institute of Information
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="mx-1 bg-card-bg mb-1">
          <CardBody className="m-0 p-0">
            <div className="flex p-1 items-center text-sm">
              <Avatar size="sm" className="mr-1" />
              <div>
                <b>Username</b>
              </div>
            </div>
            <div>
              <p className="text-xs p-1 truncate">
                First-year undergrad at Indian Institute of Information
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="mx-1 bg-card-bg mb-1">
          <CardBody className="m-0 p-0">
            <div className="flex p-1 items-center text-sm">
              <Avatar size="sm" className="mr-1" />
              <div>
                <b>Username</b>
              </div>
            </div>
            <div>
              <p className="text-xs p-1 truncate">
                First-year undergrad at Indian Institute of Information
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </RightContentWrapper>
  )
}

export default RightBar
