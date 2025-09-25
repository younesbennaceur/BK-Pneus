import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'  // <-- Pas d'accolades {Home}, car c'est un export default
import Actus from './pages/Actus'
import Contact from './pages/Contact'
import NosPhotos from './pages/NosPhotos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
        <Route path='/actus' element={<Actus/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/nosphotos' element={<NosPhotos/>} />
       
      </Routes>
      <Footer/>
      <WhatsAppButton/>

    </div>
  )
}

export default App  // <-- On exporte seulement App ici