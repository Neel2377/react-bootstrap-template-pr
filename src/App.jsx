import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Clients from './components/Clients'
import Features from './components/Features'
import Services from './components/Services'
import Action from './components/Action'
import Portfolio from './components/Portfolio'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Hero></Hero>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/clients' element={<Clients></Clients>}/>
        <Route path='/features' element={<Features></Features>}/>
        <Route path='/action' element={<Action></Action>}/>
        <Route path='/services' element={<Services></Services>}/>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}/>
        <Route path='/stats' element={<Stats></Stats>}/>
        <Route path='/testimonials' element={<Testimonials></Testimonials>}/>
        <Route path='/team' element={<Team></Team>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
      </Routes>
      <Footer></Footer>

    </>
  )
}

export default App