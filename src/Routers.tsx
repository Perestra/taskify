import { BrowserRouter, Route, Routes } from "react-router-dom"

import { NavHeader } from "./components/Header/Header"
import { Home } from "./pages/Home/Home"
import { Date } from "./components/Date/Date"

const Routers = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Date />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers