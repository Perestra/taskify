import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TaskProvider } from "./contexts/TaskContext"
import { HeaderRouter } from "./components/HeaderRouter/HeaderRouter"
import { AllTasks } from "./pages/AllTasks/AllTasks"

const Routers = () => {
  return (
    <BrowserRouter>
      <HeaderRouter/>
      <TaskProvider>
        <Routes>
          <Route index element={<AllTasks />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default Routers