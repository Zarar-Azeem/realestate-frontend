import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState ).auth.token 
        if (token) {
            headers.set("authToken", `${token}`)
        }
        return headers
    }
})


export const baseApi = createApi({
    baseQuery: baseQuery,
    tagTypes: ['user', 'property'],
    endpoints: builder => ({})
})