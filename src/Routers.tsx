import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TaskProvider } from "./contexts/TaskContext"
import { AllTasks } from "./pages/AllTasks/AllTasks"
import { ActiveTasks } from "./pages/ActiveTasks/ActiveTasks"
import { CompletedTasks } from "./pages/CompletedTasks/CompletedTasks"
import { Header } from "./components/Header/Header"
import { Date } from "./components/Date/Date"
import { Form } from "./components/Form/Form"

const Routers = () => {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Header />
        <Date />
        <Form />
        <Routes>
          <Route index element={<AllTasks />} />
          <Route path="/completas" element={<CompletedTasks />} />
          <Route path="/ativas" element={<ActiveTasks />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default Routers