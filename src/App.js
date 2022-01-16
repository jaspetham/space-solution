import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DesignSystem from './Components/DesignSystem';
import Homepage from './Components/Homepage';
import Destination from './Components/Destination';
import Crew from './Components/Crew';
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<><Homepage/></>}></Route>
          <Route exact path="/destination" element={<><Destination/></>}></Route>
          <Route exact path="/crew" element={<><Crew/></>}></Route>
          <Route exact path="/technology" element={<><Crew/></>}></Route>
          <Route exact path="/design-system" element={<DesignSystem/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
