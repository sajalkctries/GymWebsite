import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Facility from "./Pages/Facility";
import Merchandise from "./Pages/Merchandise";
import Services from "./Pages/Services";
import Login from "./Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col h-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/facility",
        element: <Facility />,
      },
      {
        path: "/merchandise",
        element: <Merchandise />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
  {
    path : '/login',
    element :<Login/>
  }
]);
function Layout() {
  return <RouterProvider router={router} />;
}

export default Layout;
