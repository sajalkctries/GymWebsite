import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Services from "./Pages/Service/Services";
import ServiceDetail from "./Pages/Service/ServiceDetails";
import Login from "./Components/Login";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact";
import Protected from "./Components/Protected";

const token = localStorage.getItem("token") as string;
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col">
        <Header token={token}/>
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: (
          <div className=" h-full flex flex-col">
            <Protected>
              <Contact />
            </Protected>
          </div>
        ),
      },
      {
        path: "/services",
        element: (
          <div className="flex flex-col h-full">
            <Services />
            <Outlet />
          </div>
        ),
        children: [
          {
            path: ":id",
            element: <ServiceDetail />,
            errorElement: (
              <div>
                {" "}
                Oops! Page doesn't exists{" "}
                <Link className="text-blue-600 underline" to={`/services`}>
                  Go Back
                </Link>
              </div>
            ),
          },
        ],
   } ],
  },
  { path: "/login", element: <Login isLogin={true} /> },
  { path: "/register", element: <Login isLogin={false} /> },
]);

function Layout() {
  return <RouterProvider router={router} />;
}

export default Layout;
