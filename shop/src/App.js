import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import './App.css';
import React, { createContext, useState } from 'react';
import Data from './data.js';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart'
export let Context1 = createContext()


function App() {
  let [shoes, setShoes] = useState(Data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">GardenShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate(-1) }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail/0') }}>Detail</Nav.Link>
              <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <div className='Jumbotron'>
              <h1>30% Season off</h1>
              <p>This is a simple hero unit, a simple
                jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Primary</Button>
              </p>
            </div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} key={i}></Card>
                  })}
              </div>
            </div>
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과) => {
                  console.log(결과.data)
                  let shoescopy = [...shoes, ...결과.data];
                  setShoes(shoescopy)
                })
              Promise.all([])
            }}>Button</button>
          </>
        } />
        <Route path="/detail/:id" element={
          <Context1.Provider>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />



        <Route path="*" element={<div>없는페이지</div>} />
        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>member</div>} />
          <Route path='location' element={<div>location</div>} />
        </Route>
        <Route path='/event' element={<Event></Event>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path='/cart' element={<Cart/>} />
      </Routes>


    </div >
  );
}
function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
};

function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  )
};

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}


export default App;
