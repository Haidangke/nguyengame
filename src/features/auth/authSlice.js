import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'dark',
    user: {
        displayName: '',
        photoURL: '',
        userId: '',
        email: '',
        isLoggedIn: false
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        },
        setUserInfo(state, action) {
            state.user = action.payload;
        },
        resetUserInfo(state) {
            state.user.displayName = '';
            state.user.photoURL = '';
            state.user.userId = '';
            state.user.email = '';
        }
    }
})

export const { setTheme, setUserInfo, resetUserInfo } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;