import "./App.css";
import Home from "./Screen/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./Screen/Login";
import Room from "./Screen/Room";


function App() {
  return (
    <Router>
      <div>
        <Routes>
           <Route exact path="/" element={ <Home/>} />
           <Route exact path="/login" element={ <Login/>} />
           <Route exact path="/Room" element={ <Room/>} />
           
        </Routes>
      </div>
    </Router>
  );
}


export default App;