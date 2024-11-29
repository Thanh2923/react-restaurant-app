import { Outlet,useLocation } from "react-router-dom";
import Header from "./components/Header"; // Đảm bảo rằng đường dẫn này đúng

import './index.css';
import Home from "./pages/Home";
import GoogleLoginButton from "./components/GoogleLogin";

const App = () => {
  const location = useLocation(); 
  return (
    <div className="w-full h-auto flex flex-col bg-white">
      <Header />
      <GoogleLoginButton/>
      {location.pathname === "/react-restaurant-app/" && <Home />}
      <Outlet /> {/* Đây là nơi các component con sẽ được render */}
    </div>
  );
};

export default App;
