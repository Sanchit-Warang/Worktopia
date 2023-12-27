import { apiSlice } from '@/redux/api/apiSlice'
import { OrganizationUser } from '@/types/types'

export const CompanyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<OrganizationUser[], string>({
      query: () => ({
        url: `/account/create/organization`,
      }),
      keepUnusedDataFor: 60,
    }),
    getCompany: builder.query<OrganizationUser, string | string[]>({
      query: (companyId) => ({
        url: `/account/organization/${companyId}`,
      }),
      keepUnusedDataFor: 60,
    }),
  }),
})

export const { useGetCompaniesQuery, useGetCompanyQuery } = CompanyApiSlice
