import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: {},
    list: []
}

export const router = createSlice({
    name: 'isas',
    initialState,
    reducers: {
        load: (state,action) => {
            console.log("Requesting ISAs...");
            // 
            // TODO:  Async load this from ISAs API
            // 
            state.list = [
                { id:1, desc:"ISA One", detail:"" },
                { id:2, desc:"ISA Two", detail:"" },
                { id:3, desc:"ISA Three", detail:"" },
                { id:4, desc:"ISA Four", detail:"" },
            ]
        },
        select: (state,action) => {
            // 
            // TODO: Extract find method into standard library
            // 
            for(let i=0;i<state.list.length;i++){
                if(state.list[i].id === action.payload.id){
                    state.selected = state.list[i];
                    break;
                }
            }
        }
    }
})

export const { load, select } = router.actions;

export default router.reducer