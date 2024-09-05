import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Layout from "./pages/Layout";
import Project from "./pages/Projects";
export default function App() {
  return (
  <>
   <BrowserRouter>
     <Routes>
     <Route path="/" element={<Layout/>}>
     <Route index element={<Welcome/>}/>
     <Route path="/projects" element={<Project/>}/>
      </Route>
     </Routes>
   </BrowserRouter>
  </>
  )
}