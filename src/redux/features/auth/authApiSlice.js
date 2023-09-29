import { apiSlice } from "@/redux/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        seekerLogin: builder.mutation({
            query: credentials => ({
                url: '/account/organization/login',
                method: 'POST',
                body: JSON.stringify({ ...credentials })
            })
        }),
    })
})

export const {
    useSeekerLoginMutation
} = authApiSlice