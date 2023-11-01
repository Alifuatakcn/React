import { createSlice } from "@reduxjs/toolkit";


const localeSlice = createSlice({
    name: "locale",
    initialState:{
        lang: "en",
        currency: "usd"
    },
    reducers:{
        changeLang: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { changeLang } = localeSlice.actions;
export default localeSlice.reducer;