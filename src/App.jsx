import Navbar from './Components/Common/Navbar'
import Hero from './Components/Sections/Hero'
import About from './Components/Sections/About'
import Projects from './Components/Sections/Projects'
import Resume from './Components/Sections/Resume'
import Footer from './Components/Common/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FolderTreeIcon } from 'lucide-react'
import ScrollToTop from './Components/SmallCompo/ScrollToTop'
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/navbar" element={<Navbar />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App