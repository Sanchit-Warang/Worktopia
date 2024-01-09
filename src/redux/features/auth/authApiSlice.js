import { apiSlice } from "@/redux/api/apiSlice";
import formDataConvert from "@/utils/formDataConvert";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        seekerLogin: builder.mutation({
            query: credentials => ({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: '/account/jobseeker/login',
                method: 'POST',
                body: JSON.stringify({ ...credentials })
            }),
            invalidatesTags: ['JobProfile']
        }),
        orgLogin: builder.mutation({
            query: credentials => ({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: '/account/organization/login',
                method: 'POST',
                body: JSON.stringify({ ...credentials })
            })
        }),
        seekerRegistration: builder.mutation({
            query: data => ({
                url: '/account/create/jobseeker',
                method: 'POST',
                body: formDataConvert({ ...data })
            }),
            invalidatesTags: ['User']
        }),
        orgRegistration: builder.mutation({
            query: data => ({
                url: '/account/create/organization',
                method: 'POST',
                body: formDataConvert({ ...data })
            }),
            invalidatesTags: ['Company']
        }),
    })
})

export const {
    useSeekerLoginMutation,
    useOrgLoginMutation,
    useSeekerRegistrationMutation,
    useOrgRegistrationMutation,
} = authApiSlice