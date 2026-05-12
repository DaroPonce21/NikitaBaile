import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Disciplines from './components/Disciplines/Disciplines'
import Schedule from './components/Schedule/Schedule'
import Instructors from './components/Instructors/Instructors'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import SocialFeed from './components/SocialFeed/SocialFeed'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Disciplines />
      <Schedule />
      <Instructors />
      <Gallery/>
      <Contact/>
      <SocialFeed/>
      <Footer/>
    </>
  )
}

export default App