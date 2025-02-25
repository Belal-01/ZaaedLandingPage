
import './App.css'
import Hero from '../Sections/Hero'
import Header from '../Sections/Header'
import AppView from '../Sections/AppView'
import WhoWeAre from '../Sections/WhoWeAre'
import FAQ from '../Sections/FAQ'
import Contacts from '../Sections/Contacts'

function App() {


  return (
    <div className='font-cairo'>
      <Header/>
      <Hero />
      <WhoWeAre />
      <AppView />
      <FAQ />
      <Contacts />
    </div>
  )
}

export default App
