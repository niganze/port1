import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Layout from "./pages/Layout";
import Project from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SingleBlog from "./pages/SingleBlog";
import About from "./pages/About";

import LayoutDashboard from "./dashboard/LayoutDashboard";
import Dashboard from "./dashboard/Dashboard";
import Projectdash from "./dashboard/Projectdash";
import Blogsdash from "./dashboard/Blogsdash";
import Messages from "./dashboard/Messages";
import JobExprience from "./dashboard/JobExprience";
import ServiceDash from "./dashboard/ServiceDash";
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

          {/* dashboard */}
          <Route path="/" element={<LayoutDashboard />}>
           <Route index element={<Dashboard/>}/>
           <Route path="/dashboard" element={<Projectdash/>}/>
           <Route path="/blogs" element={<Blogsdash/>}/>
           <Route path="/messages" element={<Messages/>}/>
           <Route path="/experience" element={<JobExprience/>}/>
           <Route path="/services" element={<ServiceDash />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
