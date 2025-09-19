import Hero from '../components/Hero'
import About from '../components/About'
import Devis from '../components/Devis'
import Services from '../components/Services'
import Infos from '../components/Infos'

export default function Home() {
  return (
    <div>
      
        <Hero/>
        <About/>
        <Devis/>
        <Services/>
        <Infos/>
        
        
    </div>
    

    
  )
}


// Pas besoin de réécrire `export default` si déjà présent