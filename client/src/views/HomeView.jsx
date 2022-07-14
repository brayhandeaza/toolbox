import React from "react"
import { useState } from 'react'
import FilesWithData from "../components/FilesWithData"
import Files from "../components/Files"
import { connect, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchFiles, fetchFilesWithData } from '../redux/apiFetchs'

const HomeView = (props) => {
    const [isButtonWithData, setIsButtonWithData] = useState(false)
    const dispatch = useDispatch()

    const handleButtonClick = (title) => {
        if (title === "files") {
            setIsButtonWithData(false)
        } else {
            setIsButtonWithData(true)
        }
    }

    useEffect(() => {
        dispatch(fetchFiles())
        dispatch(fetchFilesWithData())
    }, [])


    return (
        <div className="Home" data-testid="homeView">
            <div className="text-app">
                <h1>React Test App</h1>
            </div>
            <div>
                <button className={isButtonWithData ? "isNotActive" : "isActive"} onClick={() => handleButtonClick("files")}>Files</button>
                <button className={!isButtonWithData ? "isNotActive" : "isActive"} onClick={() => handleButtonClick("filesWithData")}>Files & Datas</button>
            </div>
            {isButtonWithData ? <FilesWithData /> : <Files />}
        </div >
    )
}
const mapStateToProps = (state, ownProps) => ({
    state, ownProps
})


export default connect(mapStateToProps)(HomeView)
