import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

// fetch single file data
export const fetchFiles = createAsyncThunk("file/fetchFiles", async () => {
    return axios.get(`http://localhost:8000/files/data`).then((res) => res.data)
})

// fetch single file data
export const fetchFileData = createAsyncThunk("file/fetcFilehData", async (fileName) => {
    return axios.get(`http://localhost:8000/files/data?fileName=${fileName}`).then((res) => res.data)
})