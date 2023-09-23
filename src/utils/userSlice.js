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
        }
    }
})


export const {addUser}=userSlice.actions
export default userSlice.reducer