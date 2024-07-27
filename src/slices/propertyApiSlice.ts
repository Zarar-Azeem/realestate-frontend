import { baseApi } from "../api/api";
import { Property } from "../types/PropertyTypes";
import { setProperties,setSavedProperties } from "./propertySlice";


const propertyApiSlice = baseApi.injectEndpoints({
    endpoints : (build) => ({
        
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
            }),
            providesTags:['userProperties']
        }),
        getSavedProperties : build.query<Property[], any>({
            query: () => ({
                url: '/api/property/savedproperties',
                method: 'GET'
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled
                  dispatch(setSavedProperties(data))
                } catch (err) {
                    console.log(err)
                }
              }
        }),
        createProperty: build.mutation({
            query: (data) => ({
                url: '/api/property/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['property' , 'userProperties'],
        }),
        deleteProperty: build.mutation({
            query: (id) => ({
                url: `/api/property/delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags:['userProperties' , 'savedProperty']
        }),
        saveProperty: build.mutation({
            query:(id)=>({
                url:`/api/property/saveproperty/${id}`,
                method:'POST'
            }),
        })
    })
})


export const { useCreatePropertyMutation,
                useGetPropertiesQuery ,
                useGetUserPropertiesQuery,
                useDeletePropertyMutation,
                useGetOnePropertyQuery,
                useGetSavedPropertiesQuery,
                useSavePropertyMutation
            } = propertyApiSlice