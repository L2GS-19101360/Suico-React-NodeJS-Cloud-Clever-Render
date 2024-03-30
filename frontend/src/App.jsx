import { Component, useState } from 'react'
import './App.css'
import { Navbar, Container } from 'react-bootstrap'
import CreatePersonModal from './components/CreatePersonModal'
import SearchBar from './components/SearchBar'
import PersonsTable from './components/PersonsTable'
import ClockComponent from './components/ClockComponent'

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
            <Navbar.Brand><ClockComponent/></Navbar.Brand>
          </Container>
        </Navbar>
        <div style={{ marginTop: "20px", paddingLeft: "2%", paddingRight: "2%", display: "inline-flex", gap: "20px" }}>
          <CreatePersonModal />
        </div>
        <PersonsTable />
      </div>
    );
  }

}

export default App
