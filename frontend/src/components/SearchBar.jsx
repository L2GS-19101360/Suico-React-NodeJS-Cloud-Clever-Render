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
                        placeholder="Enter Person"
                        aria-label="Enter Person"
                        aria-describedby="basic-addon2"
                        style={{width: "750px"}}
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