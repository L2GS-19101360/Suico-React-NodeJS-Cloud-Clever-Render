import { Component, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

class CreatePersonModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    componentDidMount() {

    }
    componentWillUnmount() {

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