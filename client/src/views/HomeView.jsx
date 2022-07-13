import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchFiles, fetchFilesWithData } from '../redux/apiFetchs'
import Table from 'react-bootstrap/Table'


const HomeView = () => {
    const state = useSelector(state => state.fileSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFiles())
        dispatch(fetchFilesWithData())
    }, [])


    const handleOnClick = (file) => {
        window.location.href = `/${file}`
    }

    return (
        <div className="Home">
            <div className="text-app">
                <h1>React Test App</h1>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        {state.headers.map((tableHeader, key) => (
                            <th key={key}>{tableHeader}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {state.filesWithData.map((data, key) => (
                        <tr key={key} onClick={() => handleOnClick(data.file)}>
                            <td>{key + 1}</td>
                            <td>{data.file}</td>
                            <td>{data.lines.length}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}


export default HomeView
