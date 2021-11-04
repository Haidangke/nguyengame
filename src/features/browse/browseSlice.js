import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genresCheck: [],
    gameModeCheck: [],
    platformsCheck: [],
    sort: 'first_release_date desc'
}

const browseSlice = createSlice({
    name: "browse",
    initialState,
    reducers: {
        setFilter(state, action) {
            state.genresCheck = action.payload.genresCheck;
            state.gameModeCheck = action.payload.gameModeCheck;
            state.platformsCheck = action.payload.platformsCheck;
            state.sort = action.payload.sort;
        },
        resetFilter(state) {
            state.genresCheck = [];
            state.gameModeCheck = [];
            state.platformsCheck = [];
            state.sort = 'first_release_date desc';
        }
    }
});

const browseReducer = browseSlice.reducer;

export const { setFilter, resetFilter } = browseSlice.actions;
export default browseReducer;