import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        email: '',
        name: '',
        locale: '',
        picture: ''
    }

}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.profile = action.payload;
        }
    }
});

export const { setUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;