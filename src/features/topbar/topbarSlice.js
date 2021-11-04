import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pathBack: '/'
}

const topbarSlice = createSlice({
    name: 'topbar',
    initialState,
    reducers: {
        setPathBack(state, action) {
            state.pathBack = action.payload;
        }
    }
});

export const { setPathBack } = topbarSlice.actions;

const topbarReducer = topbarSlice.reducer;
export default topbarReducer;