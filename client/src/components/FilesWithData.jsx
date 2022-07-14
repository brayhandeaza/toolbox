import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

const HomeView = () => {
    const state = useSelector(state => state.fileSlice)

    const handleOnClick = (file) => {
        window.location.href = `/${file}`
    }

    return (
        <div className="FilesWithData">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {state.headers.map((tableHeader, key) => (
                            <th key={key}>{tableHeader}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {state.filesWithData.map((data, key) => (
                        data.lines.map((line, key) => (
                            <tr key={key} onClick={() => handleOnClick(data.file)}>
                                <td>{line.file}</td>
                                <td>{line.text}</td>
                                <td>{line.number}</td>
                                <td>{line.hex}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </Table>
        </div>
    )
}


export default HomeView
