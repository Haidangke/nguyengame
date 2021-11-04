import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    input: "",
    listGame: [],
    isFetched: false
}
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setInput(state, action) {
            state.input = action.payload;
        },
        fetchData(state) {
            state.loading = true;
            state.isFetched = false;
        },
        fetchDataSuccess(state, action) {
            state.loading = false;
            state.isFetched = true;
            state.listGame = action.payload;
        },
        fetchDataFailed(state) {
            state.loading = false;
            state.isFetched = true;
        }
    }
});

export const { setInput, fetchData, fetchDataSuccess, fetchDataFailed } = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;