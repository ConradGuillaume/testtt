import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/style/index.scss";
import "./App.scss";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/privacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
