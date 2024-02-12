import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AddMedication from "../pages/AddMedication/AddMedication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "medication",
        element: <AddMedication></AddMedication>,
      },
    ],
  },
]);

export default router;
