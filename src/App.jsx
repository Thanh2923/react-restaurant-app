import { Outlet,useLocation } from "react-router-dom";
import Header from "./components/Header"; // Đảm bảo rằng đường dẫn này đúng
import CartContainer from './components/CartContainer'
import './index.css';
import Home from "./pages/Home";
const App = () => {
 
  const location = useLocation(); 
  return (
    <div className="w-full h-auto flex flex-col bg-white">
      <Header />

      <CartContainer  />
      {location.pathname === "/" && <Home />}
      <Outlet /> {/* Đây là nơi các component con sẽ được render */}
    </div>
  );
};

export default App;
