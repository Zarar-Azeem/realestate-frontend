import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../types/UserTypes"

type AuthState = {
    authenticated: boolean,
    token: string | null,
    user: User | null,
}

const initialState : AuthState = {
    token: null,
    authenticated :  false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action : PayloadAction<User>) => {
            state.authenticated = true
            state.user = action.payload
        },
        logout: (state) => {
            state.authenticated = false
        }
    }
})

export const { setUser , logout } = authSlice.actions

export default authSlice.reducer

// export const currentUser = useSelector((state : RootState) => state.auth.user)

