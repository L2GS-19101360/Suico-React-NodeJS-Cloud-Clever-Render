import { Component, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios';

class CreatePersonModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            newFirstName: "",
            newLastName: ""
        };
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    toCreatePerson = () => {
        const { newFirstName, newLastName } = this.state;
        axios.post(
            'https://react-node-mysql-api.onrender.com/api/v1/persons/', {
            firstName: newFirstName, // Corrected key names
            lastName: newLastName    // Corrected key names
        }
        ).then(
            response => {
                console.log('New person created:', response.data);
                this.handleClose(); // Close the modal after successful creation
            }
        ).catch(
            error => {
                console.error('Error creating new person:', error);
            }
        );
    }

    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        const { show } = this.state;

        return (
            <div>
                <Button variant="success" onClick={this.handleShow}>
                    Create New Person
                </Button>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Person</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter First Name"
                                name='newFirstName'
                                value={this.state.newFirstName}
                                onChange={(e) => this.setState({ newFirstName: e.target.value })} />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                name='newLastName'
                                value={this.state.newLastName}
                                onChange={(e) => this.setState({ newLastName: e.target.value })} /><br />
                            <Button variant="success" onClick={this.toCreatePerson}>Create Person</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default CreatePersonModal