import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="w-screen h-screen bg-zinc-700  ">
      <nav className="pt-5 text-white flex justify-center gap-10 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr className="mt-7 bg-zinc-100"/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    
    
    
    </div>
  );
};

export default App;
