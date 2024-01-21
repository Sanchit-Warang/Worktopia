'use client'
import { useParams } from 'next/navigation'
import { ScrollShadow, CircularProgress, Avatar } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import JobList from '@/components/JobList'
import { useGetCompanyQuery } from '@/redux/features/company/companyApiSlice'
import Link from 'next/link'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import HiddenSortButton from '@/components/ui/HiddenSortButton'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'

const CompanyPage = () => {
  const { Id } = useParams()
  const { data: organization, isLoading, error } = useGetCompanyQuery(Id)

  if (isLoading) {
    return (
      <div className=" h-[100%] w-full flex justify-center items-center">
        <CircularProgress label="Free hosting may require some time" />
      </div>
    )
  }

  if (error || organization === undefined) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <>
      <HeadingWrapper>
        <span>@{organization.username}</span>
        <HiddenSortButton />
      </HeadingWrapper>
      <ScrollableContentWrapper>
        <div className="bg-card-bg p-6">
          <div className="flex flex-col items-center mx-[15%]">
            <div className="my-2">
              <Avatar
                isBordered
                color="secondary"
                radius="md"
                className="w-20 h-20"
                src={organization.profile_pic}
              />
            </div>
            <div className="text-3xl my-1">
              <p>{organization.name}</p>
            </div>
            <div className="text-lg my-1">
              <p>{organization.location}</p>
            </div>
            <div className="text-md my-1">
              <p>
                <Link target="_blank" href={organization.website}>
                  <FontAwesomeIcon icon={faGlobe} /> {organization.website}
                </Link>
              </p>
            </div>
            <div className="text-sm text-copy-lighter my-1">
              <p>Established in {organization.founded_at}</p>
            </div>
          </div>
        </div>
        <div className="mt-6  mx-10">
          <div className="text-lg text-center">About {organization.name}</div>
          <br />
          <p className="text-justify">{organization.overview}</p>
        </div>
        <div className="my-8">
          <div className="text-center text-lg my-6">
            Jobs at {organization.name}
          </div>
          <JobList
            filters={{
              search: '',
              role: '',
              organization__name: `${organization.name}`,
              required_experience__lte: '10',
              salary__lte: '100',
            }}
            sort="recent"
          />
        </div>
      </ScrollableContentWrapper>
    </>
  )
}

export default CompanyPage
