import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './Pages/home/Home'
import About from './Pages/about/About'
import Contact from './Pages/contact/Contact'
import Gallery from './Pages/gallery/Gallery'
import Plans from './Pages/plans/Plans'
import Trainers from './Pages/trainers/Trainers'
import NotFound from './Pages/notFound/NotFound'
import Nav from './Components/Nav'
import Footer from './Components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact/>} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
