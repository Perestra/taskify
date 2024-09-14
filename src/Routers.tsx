import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TaskProvider } from "./contexts/TaskContext"
import { RouterHeader } from "./RouterHeader/RouterHeader"
import { Home } from "./pages/Home/Home"

const Routers = () => {
  return (
    <BrowserRouter>
      <RouterHeader/>
      <TaskProvider>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default Routers