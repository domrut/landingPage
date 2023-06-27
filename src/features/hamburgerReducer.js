import {createSlice} from "@reduxjs/toolkit";

export const hamburgerSlice = createSlice({
    name: "hamburgerMenu",
    initialState: {
        isOpen: false
    }, reducers: {
        updateHamburger: (state, action) => {
            state.isOpen = action.payload;
        }
    }
});

export const {updateHamburger} = hamburgerSlice.actions;

export default hamburgerSlice.reducer;