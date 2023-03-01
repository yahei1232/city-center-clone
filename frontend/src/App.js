import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import "./style.scss"
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ItemsSearch from "./pages/ItemSearch";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/itemssearch" element={<ItemsSearch />} />
            <Route path="/filter" element={<Filter />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
