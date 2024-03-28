import { Component, useState } from 'react'
import './App.css'
import { Navbar, Container } from 'react-bootstrap'
import CreatePersonModal from './components/CreatePersonModal'
import SearchBar from './components/SearchBar'
import PersonsTable from './components/PersonsTable'

class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>SNAP Person List</Navbar.Brand>
          </Container>
        </Navbar>
        <div style={{ padding: '1%', display: "flex", width: "100%" }}>
          <CreatePersonModal /> &nbsp;&nbsp;&nbsp;
          <SearchBar />
        </div>
        <PersonsTable />
      </div>
    );
  }

}

export default App
