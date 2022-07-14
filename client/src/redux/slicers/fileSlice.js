import { createSlice } from "@reduxjs/toolkit"
import { fetchFileData, fetchFiles, fetchFilesWithData } from "../apiFetchs"


const fileSlice = createSlice({
    name: "file",
    initialState: {
        data: [],
        headers: [],
        files: [],
        filesWithData: [],
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
        // Fetch Files with Correponding Data
        [fetchFilesWithData.pending]: (state) => {
            state.loading = true
        },
        [fetchFilesWithData.fulfilled]: (state, action) => {
            state.loading = false
            state.headers = ["file"]
            state.filesWithData = action.payload
            state.error = ''
        },
        [fetchFilesWithData.rejected]: (state, action) => {
            state.loading = false
            state.filesWithData = []
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