import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../types/UserTypes"
import { Property } from "../types/PropertyTypes"

type Properties = {
    properties: Property[]  // Array of properties
}

const initialState : Properties = {
    properties : []
}

const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        setProperties( state , action : PayloadAction<Property[]>) {
            state.properties = action.payload
        }
    }
})

export const { setProperties } = propertySlice.actions

export default propertySlice.reducer

// export const currentUser = useSelector((state : RootState) => state.auth.user)

