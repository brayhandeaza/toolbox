import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { fetchFileData } from '../redux/apiFetchs'
import { connect, useDispatch, useSelector } from 'react-redux'
import { matchPath } from 'react-router-dom'

const File = ({ match }) => {
    const state = useSelector(state => state.fileSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFileData(match.params.fileName))


        console.log(match.params)
    }, [])

    return (
        <div className="file-data">
            <div className="text-app">
                <h1><a href="/">Home</a></h1>
                <h1>React Test App: {match.params.fileName}</h1>
                <span/>
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
    )
}

const mapStateToProps = (state, ownProps) => ({
    state: ownProps
})


export default connect(mapStateToProps)(File)