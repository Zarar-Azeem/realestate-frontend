import { Dispatch, SetStateAction } from "react"

export type Message = {
    _id?:string,
    message: string,
    sender?: string,
    reciever?: string
}

export type ChatUsers = {
    _id: string,
    name: string
}


export type MessageProps = {
    messages : Message[]
    reciever: {
        name:string,
        _id:string
    } | undefined
    userId : string | undefined
}