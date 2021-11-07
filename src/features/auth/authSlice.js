import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'dark'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        }
    }
})

export const { setTheme } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;