import React from 'react'
import Table from 'react-bootstrap/Table'


export default ({ headers, data }) => {
    return (
        <div className="file-data">
            <div className="text-app">
                <h1>React Test App: {"test9.csv"}</h1>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {headers.map((tableHeader, key) => (
                            <th key={key}>{tableHeader}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((tableData, key) => (
                        <tr key={key}>
                            <td>{tableData.files}</td>
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
