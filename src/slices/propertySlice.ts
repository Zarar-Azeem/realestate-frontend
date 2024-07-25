import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../types/UserTypes"
import { Property } from "../types/PropertyTypes"

type Properties = {
    properties: Property[]  // Array of properties
    savedProperties: Property[]  // Array of properties
}

const initialState : Properties = {
    properties : [],
    savedProperties: []
}

const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        setProperties( state , action : PayloadAction<Property[]>) {
            state.properties = action.payload
        },
        setSavedProperties( state , action : PayloadAction<Property[]>) {
            state.savedProperties = action.payload
        },
    }
})

export const { setProperties, setSavedProperties } = propertySlice.actions

export default propertySlice.reducer

// export const currentUser = useSelector((state : RootState) => state.auth.user)

