import React, { useEffect, useState } from 'react'
import { useSendMessageMutation } from '../slices/messageApiSlice'
import { socket } from '../App'
import { MessageProps } from '../types/MessageTypes'



export const MessageContainer = ({messages , reciever ,userId} : MessageProps) => {
    const [ send ] = useSendMessageMutation()
    const [input, setinput] = useState('')

    

    const handleSend = async(id: string | undefined) =>{
        
        try{
            await send({id , input}).unwrap()
            console.log(socket.id)
            socket.emit('message', {
                socketId : socket.id,
                sender: userId,
                reciever: reciever?._id,
                message : input
            });
            setinput('')
        } catch (error){
            console.log(error)
        }
    }

    

    return (
        <div className='chat_container overflow-y-scroll basis-[60%] bg-gray-200 h-[24.5rem] flex flex-col-reverse rounded-lg '>
            <div className='flex flex-col-reverse'>
                <div className='flex gap-2 sticky bottom-0 z-10 bg-slate-200 p-2'>
                    <input className="w-full" type="text" value={input} onChange={(e) => setinput(e.target.value)} />
                    <button className='button bg-white' onClick={() => handleSend(reciever?._id)}>Send</button>
                </div>
                <div className='relative flex flex-col p-2'>
                    {messages && messages.map(message => 
                        <div  className='my-2'
                            key={message._id}
                            >
                            <div className={`bg-red-200 tracking-normal leading-4 text rounded-xl max-w-60 w-fit p-2 h-fit ${message.sender == userId ? ' bg-slate-400 float-right' : ' float-left bg-slate-50'}`}>{message.message}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
