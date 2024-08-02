import { baseApi } from "../api/api";
import { ChatUsers, Message } from "../types/MessageTypes";



const messageApiSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMessagedUsers: build.query<ChatUsers[], any>({
            query: () => ({
                url: '/api/message/go',
                method: 'get'
            }),
        }),
        sendMessage: build.mutation<string, any>({
            query: ({id , input}) => ({
                url: `/api/message/send`,
                method: 'post',
                body: { id , input}
            }),
        }),
        getMessages: build.query<{participants : [{ name :string, _id: string}] , messages : Message[]}, any>({
            query: (id) => ({
                url: `/api/message/${id}`,
                method: 'get',
                lazy:true
            }),
        }),
    })
})


export const { useGetMessagedUsersQuery,
            useLazyGetMessagesQuery,
            useSendMessageMutation
            } = messageApiSlice

