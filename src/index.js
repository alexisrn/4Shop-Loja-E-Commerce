import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Eletronics } from "./Pages/Eletronics";
import './index.css'
import { Jewelery } from "./Pages/Jewelery";
import { Clothing } from "./Pages/Clothing";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Search } from "./Components/Search";
import { AuthProvider } from "./Context/auth";
import { User } from "./Pages/User";
import { ItemBuy } from "./Pages/ItemBuy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}/>
      <Route path='/' element={<Home />}/>
      <Route path='/clothing' element={<Clothing />}/>
      <Route path='/eletronics' element={<Eletronics />}/>
      <Route path='/jewelery' element={<Jewelery />}/>
      <Route path='/user' element={<User  />}/>
      <Route path='/login' element={<Login />}/>
      //<Route path='/:id' element={<ItemBuy  />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/search' element={<Search />}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
