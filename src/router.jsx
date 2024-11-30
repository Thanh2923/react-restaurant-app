import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import PaymentPage from "./components/PaymentPage.jsx";
import Menu from "./pages/Menu.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "menu",
        element: <Menu/>
      },
      {
        path: "pay",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
