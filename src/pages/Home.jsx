import Hero from '../components/Hero'
import Devis from '../components/Devis'
import Services from '../components/Services'
import Contact from './Contact'

import Offers from '../components/Offers'
import Faqs from '../components/Faqs'
import Reviews from '../components/Reviews'
import Blogs from '../components/Blogs'
import Map from '../components/Map'

export default function Home() {
  return (
    <div>
      
        <Hero/>
        <Services/>
        
        <Map/>
        <Devis/>
        
        
        <Offers/>
        
       
        <Reviews/>
        <Contact/>
        <Faqs/>
        <Blogs/>
        
        
    </div>
    

    
  )
}


// Pas besoin de réécrire `export default` si déjà présent