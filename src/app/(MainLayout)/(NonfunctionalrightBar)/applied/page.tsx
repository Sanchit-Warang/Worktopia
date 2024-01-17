'use client'
import AppliedJobList from '@/components/AppliedJobList'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import useGetUserAndType from '@/hooks/useGetUserAndType'
import { WithAuthSeeker } from '@/components/HOC/WithAuthSeeker'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'

const AppliedPage = () => {
  const pathname = usePathname()
  const { user, userType } = useGetUserAndType()

  if (!user) {
    return <>Not Available for non seeker or org</>
  }

  return (
    <>
      <HeadingWrapper h={'21%'}>
        <div className="h-full flex  flex-col justify-between">
          <div className='p-3 border-b-1 border-borderr'>
            <p className="text-lg">Applied jobs</p>
          </div>
          <div className="border-y-1 border-borderr">
            <div className="flex  w-full px-9 py-1">
              <Link
                href={'/job-list'}
                className={`w-[50%] text-center ${
                  pathname === '/job-list'
                    ? 'text-primary border-b-1 border-primary'
                    : ''
                }`}
              >
                <div>Jobs</div>
              </Link>
              <Link
                href={'/applied'}
                className={`w-[50%] text-center ${
                  pathname === '/applied'
                    ? 'text-primary border-b-1 border-primary'
                    : ''
                }`}
              >
                <div>Applied</div>
              </Link>
            </div>
          </div>
        </div>
      </HeadingWrapper>
      <ScrollableContentWrapper h={'79%'}>
        <AppliedJobList username={user?.username} />
      </ScrollableContentWrapper>
    </>
  )
}

export default WithAuthSeeker(AppliedPage)
