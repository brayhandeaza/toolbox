import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchFiles } from '../redux/apiFetchs'
import Table from 'react-bootstrap/Table'



export default () => {
    const state = useSelector(state => state.fileSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFiles())
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
                        {state.headers.map((tableHeader, key) => (
                            <th key={key}>{tableHeader}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {state.files.map((file, key) => (
                        <tr key={key} onClick={() => handleOnClick(file)}>
                            <td>{file}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

