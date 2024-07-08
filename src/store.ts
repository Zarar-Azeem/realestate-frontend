import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import propertyReducer from "./slices/propertySlice";
import { baseApi } from "./api/api";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        property: propertyReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(baseApi.middleware),
        
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

