import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import AllMenuContainer from "./components/AllMenuContainer.jsx";
const router = createBrowserRouter([
  {
    path: "/react-restaurant-app/", 
    element: <App/>,
    children: [
     {
      path: "menu", 
      element: <AllMenuContainer/>,
     }
    ],
  },
]);

export default router;
