import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Layout from "./pages/Layout";
import Project from "./pages/Projects";
import Blogs from "./pages/Blogs";
export default function App() {
  return (
  <>
   <BrowserRouter>
     <Routes>
     <Route path="/" element={<Layout/>}>
     <Route index element={<Welcome/>}/>
     <Route path="/projects" element={<Project/>}/>
     <Route path="/blog" element={<Blogs/>}/>
      </Route>
     </Routes>
   </BrowserRouter>
  </>
  )
}