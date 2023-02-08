import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import "./style.scss"

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
