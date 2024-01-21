'use client'
import CompaniesList from '@/components/CompaniesList'
import HeadingWrapper from '@/components/layouts/HeadingWrapper'
import ScrollableContentWrapper from '@/components/layouts/ScrollableContentWrapper'
import HiddenSortButton from '@/components/ui/HiddenSortButton'

const CompaniesPage = () => {
  return (
    <>
      <HeadingWrapper h={'17%'}>
        <span>Companies</span>
        <HiddenSortButton />
      </HeadingWrapper>
      <ScrollableContentWrapper>
        <CompaniesList />
      </ScrollableContentWrapper>
    </>
  )
}

export default CompaniesPage
