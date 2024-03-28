import { Component, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

class SearchBar extends Component {

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
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        style={{width: "1000px"}}
                    />
                    <Button variant="primary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        );
    }

}

export default SearchBar