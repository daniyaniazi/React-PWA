import { useEffect } from "react";
import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import firebase from "./services/firbaseService";
//COMPONETS
import About from "./components/about";
import Home from "./components/home";
import Users from "./components/users";

function App() {
  useEffect(() => {
    const message = firebase.messaging();
    message.requestPermission().then(() => {
      return message.getToken()
    }).then((data) => {
      console.warn("TOKEN:", data)
    })
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users" >Users</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/users" component={Users}></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
