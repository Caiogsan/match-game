import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeforeLogin from "./pages/BeforeLog";
import AfterLogin from "./pages/AfterLog";
import Register from "./pages/Register";




function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/match-game" exact element={<BeforeLogin />}></Route>
        <Route path="/home" exact element={<AfterLogin />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
