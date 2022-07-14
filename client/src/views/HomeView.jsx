import React from "react"
import { useState } from 'react'
import FilesWithData from "../components/FilesWithData"
import Files from "../components/Files"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchFiles, fetchFilesWithData } from '../redux/apiFetchs'

const HomeView = () => {
    const [isButtonWithData, setIsButtonWithData] = useState(false)
    const state = useSelector(state => state.fileSlice)
    const dispatch = useDispatch()

    const handleButtonClick = (title) => {
        if (title === "files") {
            setIsButtonWithData(false)
        } else {
            setIsButtonWithData(true)
        }
        console.log(state)
    }

    useEffect(() => {
        dispatch(fetchFiles())
        dispatch(fetchFilesWithData())
    }, [])


    return (
        <div className="Home">
            <div className="text-app">
                <h1>React Test App</h1>
            </div>
            <div>
                <button className={isButtonWithData ? "isNotActive" : "isActive"} onClick={() => handleButtonClick("files")}>Files</button>
                <button className={!isButtonWithData ? "isNotActive" : "isActive"} onClick={() => handleButtonClick("filesWithData")}>Fils & Datas</button>
            </div>
            {isButtonWithData ? <FilesWithData /> : <Files />}
        </div >
    )
}


export default HomeView
