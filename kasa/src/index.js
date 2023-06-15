import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import Home from "./views/home/home"
import Nav from "./components/nav/nav"
import Footer from "./components/footer/footer"
import Erreur404 from "./views/Erreur404/Erreur404"
import About from "./views/About/About"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="*" element={<Erreur404 />} />
        <Route path="/about" element={<About />} />
      
        
        
        
   
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
