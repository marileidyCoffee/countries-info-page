import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Country from './pages/Country';
import NotFound from "./pages/NotFound";
import "./App.css"


function App() {
  const [theme, setTheme] = useState("dark")

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="App" data-theme={theme}>
        <Header theme={theme} onThemeChange={handleThemeChange} />
      <div className="App-container">
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/country/:name" element={ <Country /> } />
          <Route path="*" element={ <NotFound /> } />
      </Routes>
      </div>
    </div>
  )
}

export default App
