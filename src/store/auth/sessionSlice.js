import { createSlice } from "@reduxjs/toolkit";

const initialiState = {
    token : "", 
    signedIn : false
}


export const sessionSlice = createSlice({
    name : "session", 
    initialState, 
    reducers:{
        onSignedInSuccess : (state, action) => {}
    },
    extraReducers : builder => {}
})