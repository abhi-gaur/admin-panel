import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Add from "./Components/Add";
import Home from "./Components/Home";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;