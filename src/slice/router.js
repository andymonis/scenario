import { createSlice } from "@reduxjs/toolkit";

const ROUTES = [];

export const add = (_path,_component) => {
    ROUTES[ _path ] = _component;
}

export const resolve = (_path) => {
    const component = ROUTES[ _path ];
    return component;
}

const initialState = {
    path: "/"
}

export const router = createSlice({
    name: 'router',
    initialState,
    reducers: {
        navto: (state,action) => {
            state.path = action.payload;
        }
    }
})

export const { navto } = router.actions;

export default router.reducer