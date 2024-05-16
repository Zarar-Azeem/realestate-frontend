export type AuthResponse = {
    data :{
        success: boolean,
        message: string,
        token: string
    }
}


export type User ={
    name: string 
    email: string 
    number: number | null

}