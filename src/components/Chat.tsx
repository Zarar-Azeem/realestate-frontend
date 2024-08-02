// import React, { useEffect, useState } from 'react'
// import { useGetMessagedUsersQuery, useLazyGetMessagesQuery } from '../slices/messageApiSlice'
// import { useSelector } from 'react-redux'
// import { RootState } from '../store'
// import { MessageContainer } from './MessageContainer'
// import { Message } from '../types/MessageTypes'
// import { socket } from '../App'
 


// const Chat = () => {
//     const userId = useSelector((state:RootState) => state.auth.user?.id)
//     const [messages, setMessages] = useState<Message[]>([])
//     const [reciever, setReciever] = useState<{ name: string; _id: string; } | undefined>()
//     const { data : users} = useGetMessagedUsersQuery({})
//     const [ fetch ] = useLazyGetMessagesQuery({});

//     useEffect(() => {
//       socket.on('response', (data) => setMessages([...messages, data]));
      
//     }, [socket, messages]);
//     useEffect(() => {
//       socket.on('response', (data) => setMessages([...messages, data]));
      
//     }, [socket]);

  
//     const handleGetMessages = async (chatId : string) => {
//       try {
//           const res = await fetch(chatId)
//           setReciever(res.data?.participants[0])
//           setMessages(res.data?.messages as [])
        
//       } catch (error) {
//         console.error('Error fetching messages:', error);
//       }
//     };


//   return (
//     // <div className='flex'>
//     //     <div className='chat_names basis-[30%] rounded-lg bg-gray-100 p-3 flex flex-col gap-1 overflow-hidden'>
//     //         {users && users?.map(user => 
//     //             <button className={`${reciever?.name == user.name ? 'bg-slate-300' : 'bg-white'} rounded-lg p-3 text-start hover:bg-gray-200 cursor-pointer`}
//     //              key={user._id}
//     //              onClick={() => handleGetMessages(user._id)}
//     //              >{user.name}</button>
//     //         )}
//     //     </div>
//     //       <MessageContainer  messages={messages} reciever={reciever}  userId={userId}/>
//     // </div>
//   )
// }

// export default Chat