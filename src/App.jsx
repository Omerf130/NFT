import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Partner from './components/Partners/Partner'
import Product from './components/Products/Product'
import Slider from './components/slider/slider'
import Team from './components/Team/Team'
import Work from './components/Work/Work'

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <Slider/>
      <About/>
      <Product/>
      <Work/>
      <Team/>
      <Partner/>
      <Slider/>
      <Footer/>
    </>
 )
 }

export default App
