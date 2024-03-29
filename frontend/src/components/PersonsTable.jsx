import { Component, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios';

class PersonsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get('https://react-node-mysql-api.onrender.com/api/v1/persons')
            .then(response => {
                this.setState({
                    persons: response.data.data
                });
                console.log(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }
    componentWillUnmount() {

    }

    toDeletePerson = async (id) => {
        console.log(id);
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
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
                        {this.state.persons.map(person => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.firstname}</td>
                                <td>{person.lastname}</td>
                                <td><Button variant="warning">Update</Button></td>
                                <td><Button variant="danger" onClick={() => this.toDeletePerson(person.id)}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default PersonsTable