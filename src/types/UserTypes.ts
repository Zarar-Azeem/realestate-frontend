export type AuthResponse = {
    success:boolean
    user: User
}


export type User ={
    id?:string
    name: string 
    email: string 
    number: string
    avatar?: string
}

export interface UpdateUser extends User {
    password : string
}

export type UpdateResponse = {
    success : boolean
    message : string
}