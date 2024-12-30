import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Stickers from "./pages/Stickers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/stickers" element={<Stickers />} />
      </Routes>
    </Router>
  );
};

export default App;
