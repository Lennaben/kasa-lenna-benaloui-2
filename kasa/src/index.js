import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import Home from "./views/home/home"
import Nav from "./components/nav/nav"
import Footer from "./components/footer/footer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
