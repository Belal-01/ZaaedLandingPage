
import './App.css'
import Hero from '../Sections/Hero'
import Header from '../Sections/Header'
import AppView from '../Sections/AppView'
import WhoWeAre from '../Sections/WhoWeAre'

function App() {


  return (
    <div className='font-cairo'>
      <Header/>
      <Hero />
      <WhoWeAre />
      <AppView />
    </div>
  )
}

export default App
