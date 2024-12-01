import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import Menu from "./pages/Menu.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "menu",
        element: <Menu/>
      }
    ],
  },
]);

export default router;
