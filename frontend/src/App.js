import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss"
import "./admin/adminstyle.scss"

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ItemsSearch from "./pages/ItemSearch";
import Filter from "./components/Filter";

//ADMIN PAGE
import AdminNavbar from "./admin/admincomponents/Navbar";
import AdminSidebar from "./admin/admincomponents/Sidebar";

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
            <Route path="/adminnavbar" element={<AdminNavbar />} />
            <Route path="/adminsidebar" element={<AdminSidebar />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
