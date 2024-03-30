import { Component, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import axios from 'axios';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    toSearchPerson = (props) => {
        event.preventDefault();

        console.log(this.state.searchInput);

        axios.get(
            `https://react-node-mysql-api.onrender.com/api/v1/persons/${this.state.searchInput}`
        ).then(
            (response) => {
                console.log("Server Response", response.data);
                this.props.onUpdateSearchData(response.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <div>
                <Form>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter Person"
                            aria-label="Enter Person"
                            aria-describedby="basic-addon2"
                            name='enterSearchPerson'
                            value={this.state.searchInput}
                            onChange={(e) => this.setState({ searchInput: e.target.value })}
                        />
                        <Button
                            variant="primary" id="button-addon2" onClick={this.toSearchPerson} type='submit'>
                            Search
                        </Button>
                    </InputGroup>
                </Form>
            </div>
        );
    }

}

export default SearchBar