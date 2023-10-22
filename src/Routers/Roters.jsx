import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home/Home";
import ErrorPage from "../Component/ErrorPage/ErrorPage"
import Details from "../Component/Details/Details";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import PraivateRoute from "../PraivateRoute/PraivateRoute";
import Services from "../MoreServices/Services/Services";
import AboutUs from "../Component/About/AboutUs";
import ServicesDetails from "../MoreServices/ServicesDetails/ServicesDetails";
import PraivateRoute2 from "../MoreServices/PrivateRoute/PrivateRoute2";
import Galary from "../Galaery/Galary";
import GalariesDetails from "../Galaery/Galaries/GalariesDetails/GalariesDetails";
import PraivateRoute3 from "../Component/PraivateRpoute3/PraivateRpoute3";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement :<ErrorPage></ErrorPage>,
      children : [
        {
            path : "/",
            element : <Home></Home>,
            loader : () => fetch('/event.json')
        },
        {
          path : "/cards/:id",
          element : <PraivateRoute><Details></Details></PraivateRoute>,
          loader : () => fetch("/event.json")
        },
        {
          path : "/login",
          element : <Login></Login>,
        },
        {
          path : "/register",
          element : <Register></Register>,
        },
        {
          path : "/about",
          element : <AboutUs></AboutUs>
        },

        {
          path : "services",
          element : <Services></Services>,
          loader : () => fetch("/services.json")

        },
        {
          path : "/service/:id",
          element : <PraivateRoute2><ServicesDetails></ServicesDetails></PraivateRoute2>,
          loader : () => fetch("/service.json")
        },
        {
          path : "/galary",
          element : <Galary></Galary>,
          loader : () => fetch("/galaery.json")
        },
        {
          path : "/galaries/:id",
          element : <PraivateRoute3><GalariesDetails></GalariesDetails></PraivateRoute3>,
          loader : () => fetch("/galaries.json"),
        }
      ]
    },
  ]);
  export default router