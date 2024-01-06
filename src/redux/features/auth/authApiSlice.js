import { apiSlice } from "@/redux/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        seekerLogin: builder.mutation({
            query: credentials => ({
                url: '/account/jobseeker/login',
                method: 'POST',
                body: JSON.stringify({ ...credentials })
            }),
            invalidatesTags: ['JobProfile']
        }),
        orgLogin: builder.mutation({
            query: credentials => ({
                url: '/account/organization/login',
                method: 'POST',
                body: JSON.stringify({ ...credentials })
            })
        }),
        seekerRegistration: builder.mutation({
            query: data => ({
                url: '/account/create/jobseeker',
                method: 'POST',
                body: JSON.stringify({ ...data })
            })
        }),
        orgRegistration: builder.mutation({
            query: data => ({
                url: '/account/create/organization',
                method: 'POST',
                body: JSON.stringify({ ...data })
            })
        }),
    })
})

export const {
    useSeekerLoginMutation,
    useOrgLoginMutation,
    useSeekerRegistrationMutation,
    useOrgRegistrationMutation,
} = authApiSlice