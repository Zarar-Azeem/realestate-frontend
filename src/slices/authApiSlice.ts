import { baseApi } from "../api/api";
import { AuthResponse } from "../types/UserTypes";


const authApiSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<AuthResponse, {email: string , password: string}>({
            query: (data) => ({
                url: '/api/user/login',
                method: 'POST',
                body: {...data}
            })
        }),
        logout: build.mutation({
            query: () => ({
                url: '/api/user/logout',
                method: 'POST'
            }),
            invalidatesTags: ['user']
        }),
        register: build.mutation({
            query: (data) => ({
                url: '/api/user/register',
                method: 'POST',
                data
            })
        })
    })
})


export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApiSlice