import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';
import Roles from './Roles'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        WorkType CRUD Form
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/work">
              Work
            </NavLink>
          </li>
          <li className="nav-item- m-1">
          </li>
        </ul>
      </nav>
      <Roles />
      
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
