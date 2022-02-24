import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import routes from "./config/routes";
import { CartProvider } from "./contexts/CartContext";


function App() {
  return (
    <div className="scroll-m-0 scroll-p-0">
      <CartProvider>
        <NavBar/>
        <Routes>
        {routes.map((route) => (
                <Route key={route.path} exact={route.exact} path={route.path} element={<React.Suspense fallback={<>Loading...</>}>{route.element}</React.Suspense>} />
              ))}                
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
