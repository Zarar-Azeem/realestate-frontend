import { baseApi } from "../api/api";
import { UpdateUser, User , UpdateResponse  } from "../types/UserTypes";
import { setUser } from "./authSlice";


export const userApiSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAuthUser: build.query<User , any>({
            query: () => ({
                url: '/api/user/getauthuser',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled
                  dispatch(setUser(data))
                } catch (err) {
                  console.log(err)
                }
              }
        }),
        getUser: build.query<User , string>({
            query: (id) => ({
                url: `/api/user/getuser/${id}`,
                method: 'GET'
            })
        }),
        updateUser: build.mutation<UpdateResponse , UpdateUser>({
            query: (data) => ({
                url: '/api/user/updateuser',
                method: 'PATCH',
                body : {...data}
            })
        })
    })
})

export const { useGetAuthUserQuery, useGetUserQuery, useUpdateUserMutation } = userApiSlice