import { configureStore } from '@reduxjs/toolkit'
import fileSlice from "./slicers/fileSlice"


export default configureStore({
    reducer: {
        fileSlice
    }
})