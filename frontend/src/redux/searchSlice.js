import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchItem: []
    },
    reducers: {
        searchItems: (state, action) => {
            state.searchItem = []
            state.searchItem.push(...action.payload)
        }
    }
});

export const { searchItems } = searchSlice.actions;
export default searchSlice.reducer;
