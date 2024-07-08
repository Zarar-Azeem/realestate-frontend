import { baseApi } from "../api/api";
import { Property } from "../types/PropertyTypes";
import { setProperties } from "./propertySlice";

const url = new URL(window.location.href)

const propertyApiSlice = baseApi.injectEndpoints({
    endpoints : (build) => ({
        getProperties : build.query<Property[], any>({
            query: () => ({
                url: '/api/property',
                method: 'GET'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled
                  dispatch(setProperties(data))
                } catch (err) {
                  console.log(err)
                }
              }
        }),
        getOneProperty : build.query<Property, any>({
            query: (id) => ({
                url: `/api/property/getproperty/${id}`,
                method: 'GET'
            })
        }),
        searchProperties : build.query<Property[], any>({
            query: (query) => ({
                url: `/api/property/search?${query}`,
                method: 'GET'
                
            })
        }),
        getUserProperties : build.query<Property[], any>({
            query: () => ({
                url: '/api/property/getuserproperty',
                method: 'GET'
            })
        }),
        getSavedProperties : build.query<Property[], any>({
            query: () => ({
                url: '/api/property/getsavedproperty',
                method: 'GET'
            })
        }),
        createProperty: build.mutation({
            query: (data) => ({
                url: '/api/property/create',
                method: 'POST',
                body: {...data}
            }),
            invalidatesTags: ['property']
        }),
        deleteProperty: build.mutation({
            query: (id) => ({
                url: `/api/property/delete/${id}`,
                method: 'DELETE'
            })
        })
    })
})


export const { useCreatePropertyMutation,
                useGetPropertiesQuery ,
                useGetUserPropertiesQuery,
                useDeletePropertyMutation,
                useGetOnePropertyQuery,
                useGetSavedPropertiesQuery,
            } = propertyApiSlice