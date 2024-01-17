'use client'
import { Card, Avatar } from '@nextui-org/react'
import { OrganizationUser } from '@/types/types'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'

type Props = {
  company: OrganizationUser
}
const CompanyCard = ({ company }: Props) => {
  return (
    <Link href={`/companies/${company.username}`}>
      <Card className="w-full bg-card-bg bg-opacity-50">
        <div className="flex gap-2 p-3 items-center ml-1 border-b-1 border-borderr">
          <Avatar isBordered color="secondary" src={company.profile_pic} />
          <div>
            <div>{company.name}</div>
            <div className="text-copy-lighter text-sm">@{company.username}</div>
          </div>
        </div>
        <div className="h-20 overflow-y-auto text-xs p-3 scrollbar scrollbar-thumb-secondary scrollbar-thin scrollbar-track-primary-inactive mb-1 text-justify">
          {company.overview}f
        </div>
        <div className="my-1 px-3">
          {/* <Skills delay={0.3} skills={user.skills} all={false}/> */}
          <Chip size="sm" variant="flat" color="secondary">
            {company.founded_at}
          </Chip>
        </div>
      </Card>
    </Link>
  )
}

export default CompanyCard
