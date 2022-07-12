import { createSlice } from "@reduxjs/toolkit"
import { fetchFileData, fetchFiles } from "../apiFetchs"


const fileSlice = createSlice({
    name: "file",
    initialState: {
        data: [],
        headers: [],
        files: [],
        loading: false,
        error: ''
    },
    extraReducers: {
        // Fetch All File
        [fetchFiles.pending]: (state) => {
            state.loading = true
        },
        [fetchFiles.fulfilled]: (state, action) => {
            state.loading = false
            state.files = action.payload.files
            state.headers = ["file"]
            state.error = ''
        },
        [fetchFiles.rejected]: (state, action) => {
            state.loading = false
            state.headers = []
            state.data = []
            state.error = action.error.message
        },
        // Fetch File Data
        [fetchFileData.pending]: (state) => {
            state.loading = true
        },
        [fetchFileData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload.lines
            state.headers = ["file", "text", "number", "hex"]
            state.error = ''
        },
        [fetchFileData.rejected]: (state, action) => {
            state.loading = false
            state.headers = []
            state.data = []
            state.error = action.error.message
        }
    }
})

export default fileSlice.reducer