import Hero from '../components/Hero'
import About from '../components/About'
import Devis from '../components/Devis'
import Services from '../components/Services'
import Infos from '../components/Infos'
import Offers from '../components/Offers'
import Batterie from '../components/Batterie'
import Reviews from '../components/Reviews'
import Blogs from '../components/Blogs'

export default function Home() {
  return (
    <div>
      
        <Hero/>
        <About/>
        <Devis/>
        <Services/>
        <Infos/>
        <Offers/>
        <Batterie/>
        <Reviews/>
        <Blogs/>
        
        
    </div>
    

    
  )
}


// Pas besoin de réécrire `export default` si déjà présent