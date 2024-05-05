import React from 'react'

const Chat = () => {
    const users : string[] = ["Zarar", "Ahrar", "Ali" , "Mashal","Usman" , "Umerr", "Mohammed", "Hassan" , "Hussain" , "Abu Bakr"]
  return (
    <div className='flex '>
        <div className='chat_names basis-[40%] rounded-lg bg-gray-300 p-3 flex flex-col gap-1 overflow-hidden'>
            {users.map(user => 
                <div className='rounded-lg p-6 text-start bg-white hover:bg-gray-200 cursor-pointer'>{user}</div>
            )}
        </div>
        <div className='basis-[60%] bg-slate-200 h-[24.5rem]  p-3 overflow-hidden flex flex-col-reverse rounded-lg '>
            <div className='flex gap-2'>
                <input className="w-full" type="text" />
                <button className='button bg-white'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Chat