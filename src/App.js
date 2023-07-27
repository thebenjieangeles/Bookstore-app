import "./App.css";
import Navbar from "./components/Navbar";
import AddBooks from "./pages/AddBooks";
import Books from "./pages/Books";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Books />} />
        <Route path="/" element={<AddBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
