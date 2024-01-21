'use client'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import ConnectionsAndRequestsTabs from '@/components/ui/ConnectionsAndRequestsTabs'
import { useGetConnectionsQuery } from '@/redux/features/connections/connectionsApiSlice'
import CentralCirularProgress from '@/components/ui/CentralCirularProgress'
import UserListWithoutFetch from '@/components/ui/UserListWithoutFetch'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import HiddenSortButton from '@/components/ui/HiddenSortButton'

const ConnectionsPage = () => {
  const connections = useGetConnectionsQuery('')

  let content = <></>

  if (connections.isLoading) {
    content = <CentralCirularProgress />
  } else if (connections.isError || connections.data === undefined) {
    content = <>error</>
  } else {
    content = <UserListWithoutFetch users={connections.data} />
  }

  return (
    <>
      <HeadingWrapper>
        <span>Connections</span>
        <HiddenSortButton />
      </HeadingWrapper>
      <ConnectionsAndRequestsTabs />
      <ScrollableContentWrapper>{content}</ScrollableContentWrapper>
    </>
  )
}

export default ConnectionsPage
