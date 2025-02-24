
import './App.css'
import Hero from '../Sections/Hero'
import Header from '../Sections/Header'
import AppView from '../Sections/AppView'
import WhoWeAre from '../Sections/WhoWeAre'
import FAQ from '../Sections/FAQ'

function App() {


  return (
    <div className='font-cairo'>
      <Header/>
      <Hero />
      <WhoWeAre />
      <AppView />
      <FAQ />
    </div>
  )
}

export default App
