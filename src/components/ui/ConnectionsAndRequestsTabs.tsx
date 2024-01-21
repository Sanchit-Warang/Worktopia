'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ConnectionsAndRequestsTabs = () => {
  const pathname = usePathname()
  return (
    <div className="border-y-1 border-borderr">
      <div className="flex  w-full px-9 py-1">
        <Link
          href={'/connections/connections'}
          className={`w-[50%] text-center ${
            pathname === '/connections/connections'
              ? 'text-primary border-b-1 border-primary'
              : ''
          }`}
        >
          <div>Connections</div>
        </Link>
        <Link
          href={'/connections/received'}
          className={`w-[50%] text-center ${
            pathname === '/connections/received'
              ? 'text-primary border-b-1 border-primary'
              : ''
          }`}
        >
          <div>Connections Requests</div>
        </Link>
      </div>
    </div>
  )
}

export default ConnectionsAndRequestsTabs
