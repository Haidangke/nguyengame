import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentId: ''
}

const notifySlice = createSlice({
    name: 'notify',
    initialState,
    reducers: {
        setCommentId(state, action) {
            state.commentId = action.payload;
        }
    }
})

export const { setCommentId } = notifySlice.actions;

const notifyReducer = notifySlice.reducer;
export default notifyReducer;