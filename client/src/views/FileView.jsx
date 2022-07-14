import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { fetchFileData } from '../redux/apiFetchs'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const FileView = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.fileSlice)
    const params = useParams()

    useEffect(() => {
        dispatch(fetchFileData(params.fileName))
    }, [])

    return (
        <div className="File">
            <div className="file-data">
                <div className="text-app">
                    <h1><a href="/">Home</a></h1>
                    <span />
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {state.headers.map((tableHeader, key) => (
                                <th key={key}>{tableHeader}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {state.data.map((tableData, key) => (
                            <tr key={key}>
                                <td>{tableData.file}</td>
                                <td>{tableData.text}</td>
                                <td>{tableData.number}</td>
                                <td>{tableData.hex}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}



export default FileView