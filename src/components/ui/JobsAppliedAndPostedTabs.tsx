'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useGetUserAndType from '@/hooks/useGetUserAndType'

const JobsAppliedAndPostedTabs = () => {
  const pathname = usePathname()
  const { user, userType } = useGetUserAndType()
  return (
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
        {userType === 'Organization' ? (
          <Link
            href={'/jobposted'}
            className={`w-[50%] text-center ${
              pathname === '/jobposted'
                ? 'text-primary border-b-1 border-primary'
                : ''
            }`}
          >
            <div>Jobs Posted</div>
          </Link>
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default JobsAppliedAndPostedTabs
