'use client'
import UsersList from '@/components/UsersList'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import HiddenSearch from '@/components/ui/HiddenSearch'
import HiddenSortButton from '@/components/ui/HiddenSortButton'

const UsersPage = () => {
  return (
    <>
      <HeadingWrapper>
        <span>Users</span>
        <HiddenSortButton />
      </HeadingWrapper>
      {/* <HiddenSearch /> */}
      <ScrollableContentWrapper>
        <UsersList />
      </ScrollableContentWrapper>
    </>
  )
}

export default UsersPage
