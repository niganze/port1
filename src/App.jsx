import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import History from "./pages/History";
import Home from "./pages/Home";
import Service from "./pages/Service";


export default function App() {
  return (
  <div>
    <Header/>
    <Home/>
    <About/>
    <History/>
    <Service/>
    <Contact/>
    <Footer/>
  </div>
  )
}