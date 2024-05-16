import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../types/UserTypes"

type AuthState = {
    authenticated: boolean,
    user: User | null,
    token: string | null,
}


const initialState : AuthState = {
    token: null,
    authenticated : false,
    user : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action : PayloadAction<User>) => {
            state.authenticated = true
            state.user = action.payload
        },
        logout: (state) => {
            state.authenticated = false
            state.user = null
        }
    }
})

export const { login , logout } = authSlice.actions

export default authSlice.reducer