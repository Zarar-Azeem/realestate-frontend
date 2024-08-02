import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { setProperties } from '../slices/propertySlice'
import { Property } from '../types/PropertyTypes'

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
    tagTypes: ['user', 'property','userProperties', 'savedProperty' , 'messages'],
    endpoints: builder => ({
        getProperties : builder.query<Property[], any>({
            query: () => ({
                url: '/api/property',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled
                  console.log(data)
                  dispatch(setProperties(data))
                } catch (err) {
                  console.log(err)
                }
              },
        }),
        
    })
})