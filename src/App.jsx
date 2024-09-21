import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Layout from "./pages/Layout";
import Project from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SingleBlog from "./pages/SingleBlog";
import About from "./pages/About";
import Dashboard from "./dashboard/LayoutDashboard";
import ProjectsDash from "./dashboard/ProjectsDash";
import LayoutDashboard from "./dashboard/LayoutDashboard";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/singleblog" element={<SingleBlog />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LayoutDashboard />}>
           <Route index element={<Dashboard/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/pro" element={<ProjectsDash />} /> 
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
