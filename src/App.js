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
import Technology from './Components/Technology';
function App() {
  return (
    <Router basename='/space-solution'>
        <Routes>
          <Route exact path="/" element={<><Homepage/></>}></Route>
          <Route path="/destination" element={<><Destination/></>}></Route>
          <Route path="/crew" element={<><Crew/></>}></Route>
          <Route path="/technology" element={<><Technology/></>}></Route>
          <Route path="/design-system" element={<DesignSystem/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
