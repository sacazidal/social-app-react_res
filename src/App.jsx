import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Stickers from "./pages/Stickers";
import LeftBar from "./components/LeftBar";
import Header from "./components/Header";
import New from "./components/Stickers/New";
import Popular from "./components/Stickers/Popular";
import Animated from "./components/Stickers/Animated";
import Style from "./components/Stickers/Style";
import Free from "./components/Stickers/Free";

const App = () => {
  return (
    <Router basename="/social-app-react">
      <Header />
      <div className="flex">
        <LeftBar />
        <Routes>
          <Route path="/stickers" element={<Stickers />}>
            <Route path="new" element={<New />} />
            <Route
              index
              element={<Navigate to="new" replace />}
            />
            <Route path="popular" element={<Popular />} />
            <Route path="animated" element={<Animated />} />
            <Route path="style" element={<Style />} />
            <Route path="free" element={<Free />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
