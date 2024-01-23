import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardBody, Avatar } from '@nextui-org/react'
import RightContentWrapper from './layouts/RightContentWrapper'
import PeopleOrCompanyList from './PeopleOrCompanyList'
import { useGetUsersQuery } from '@/redux/features/users/usersApiSlice'
import { useGetCompaniesQuery } from '@/redux/features/company/companyApiSlice'

const RightBar = () => {
  const users = useGetUsersQuery('')
  const companies = useGetCompaniesQuery('')
  return (
    <RightContentWrapper>
      <PeopleOrCompanyList data={users.data} heading={'People'}/>
      <PeopleOrCompanyList data={companies.data} heading={'Companies'} />
    </RightContentWrapper>
  )
}

export default RightBar
