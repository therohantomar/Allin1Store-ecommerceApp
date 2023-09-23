import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        info:{

        }
    },
    reducers:{
        addUser:(state,action)=>{
            state.info=action.payload
        },
        removeUser:(state)=>{
            state.info={}
        }
    }
})


export const {addUser, removeUser}=userSlice.actions
export default userSlice.reducer