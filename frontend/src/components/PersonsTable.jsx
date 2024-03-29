import { Component, useState } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios';

class PersonsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],

            selectedID: "",
            selectedFirstName: "",
            selectedLastName: "",

            showModal: false
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

    handleModalOpen = (id, firstname, lastname) => {
        console.log(id + firstname + lastname);

        this.setState({
            showModal: true,
            selectedID: id,
            selectedFirstName: firstname,
            selectedLastName: lastname
        });
    }

    handleModalClose = () => {
        this.setState({ showModal: false, selectedID: null, selectedFirstName: "", selectedLastName: "" });
    }

    toDeletePerson = async (id) => {
        console.log(id);

        axios.delete(
            `https://react-node-mysql-api.onrender.com/api/v1/persons/${id}`
        ).then(
            (response) => {
                console.log("Server Response", response.data);
                window.location.reload();
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    }

    toUpdatePerson = async (event) => {
        event.preventDefault();

        console.log(this.state.selectedID + this.state.selectedFirstName + this.state.selectedLastName);
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
                                <td><Button variant="warning" onClick={(event) => this.handleModalOpen(person.id, person.firstname, person.lastname)}>Update</Button></td>
                                <td><Button variant="danger" onClick={() => this.toDeletePerson(person.id)}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Contact {this.state.selectedID}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name='newFirstName'
                                value={this.state.selectedFirstName}
                                onChange={(e) => this.setState({ selectedFirstName: e.target.value })} />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name='newFirstName'
                                value={this.state.selectedLastName}
                                onChange={(e) => this.setState({ selectedLastName: e.target.value })} /><br/>
                            <Button variant="warning" type='submit' onClick={this.toUpdatePerson}>Create Person</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default PersonsTable