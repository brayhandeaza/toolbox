import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'


const HomeView = () => {
    const state = useSelector(state => state.fileSlice)

    const handleOnClick = (file) => {
        window.location.href = `/${file}`
    }

    console.log(state.loading)

    return (
        <div className="FilesWithData" data-testid={"file-table-hader"}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>File</th>
                    </tr>
                </thead>
                <tbody>
                    {state.filesWithData.map((data, key) => (
                        <tr data-testid={data.file} key={key} onClick={() => handleOnClick(data.file)}>
                            <td>{data.file}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}


export default HomeView
