import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
    channel: {
        name: '',
        url: ''
    },
}

const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        channel(state, action) {
            state.channel = action.payload;
        }
    }
})

export const { channel } = channelsSlice.actions;
export const store = configureStore({
    reducer: channelsSlice.reducer,
    devTools: true
});