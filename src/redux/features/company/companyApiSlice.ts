import { apiSlice } from '@/redux/api/apiSlice'
import { OrganizationUser } from '@/types/types'

export const CompanyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<OrganizationUser[], string>({
      query: () => ({
        url: `/account/create/organization`,
      }),
      providesTags: ['Company']
    }),
    getCompany: builder.query<OrganizationUser, string | string[]>({
      query: (companyId) => ({
        url: `/account/organization/${companyId}`,
      }),
    }),
  }),
})

export const { useGetCompaniesQuery, useGetCompanyQuery } = CompanyApiSlice
