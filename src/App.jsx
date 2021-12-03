import AppBody from "./components/AppBody/AppBody";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
  return (    
    <>
    <Router>
    <NavBar />
    <AppBody />
    </Router>
    
    
    </>
  );
};

export default App;