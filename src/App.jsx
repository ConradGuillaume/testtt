import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/style/index.scss";
import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;