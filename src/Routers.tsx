import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TaskProvider } from "./contexts/TaskContext"
import { Header } from "./components/Header/Header"
import { AllTasks } from "./pages/AllTasks/AllTasks"
import { ActiveTasks } from "./pages/ActiveTasks/ActiveTasks"
import { CompletedTasks } from "./pages/CompletedTasks/CompletedTasks"
import { NotFound } from "./pages/NotFound/NotFound"
import { Footer } from "./components/Footer/Footer"

const Routers = () => {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Header />
          <Routes>
            <Route index element={<AllTasks />} />
            <Route path="completas" element={<CompletedTasks />} />
            <Route path="ativas" element={<ActiveTasks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* <Footer /> */}
      </TaskProvider>
    </BrowserRouter>
  )
}

export default Routers