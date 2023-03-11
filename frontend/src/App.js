import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";

//CUSTEMRS
import "./style.scss"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Navbar from "./components/Navbar";
import Items from "./pages/Items";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

//ADMIN
import "./admin/adminstyle.scss"
import AdminNavbar from "./admin/admincomponents/Navbar";
import AdminSidebar from "./admin/admincomponents/Sidebar";
import AdminHome from "./admin/pages/Home";
import AdminNewUser from "./admin/pages/NewUser";
import AdminNewProduct from "./admin/pages/NewProduct";
import AdminProductList from "./admin/pages/Productlist";
import ItemsSearch from "./pages/ItemSearch";
import AdminOrderslist from "./admin/pages/Orderlist";
import AdminProduct from "./admin/pages/Updateproduct";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="row">
        <AdminSidebar className="f1" />
        <Outlet className="f2" />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/items",
        element: <Items />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/itemssearch",
        element: <ItemsSearch />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/adminnewuser",
        element: <AdminNewUser />,
      },
      {
        path: "/product/:productId",
        element: <AdminProduct />,
      },
      {
        path: "/adminnewproduct",
        element: <AdminNewProduct />,
      },
      {
        path: "/adminproductlst",
        element: <AdminProductList />,
      },
      {
        path: "/adminorderlist",
        element: <AdminOrderslist />,
      },
    ],
  }
]);

function App() {
  const currentUserIsAdmin = useSelector(state => state?.user?.currentUser?.isAdmin);
  // console.log(currentUserIsAdmin);
  return (
    <div className="app">
      {currentUserIsAdmin === "true" ? (
        <RouterProvider router={router1} />
      ) : (
        <div className="container">
          <RouterProvider router={router} />
        </div>
      )}
    </div>
  );
}

export default App;
