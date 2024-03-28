import { Component, useState } from 'react'
import { Table } from 'react-bootstrap'

class PersonsTable extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default PersonsTable