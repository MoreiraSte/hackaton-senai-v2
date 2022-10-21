import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import About from './components/About';
import Footer from './components/Footer';
import US from './components/US'
import './styles/global.css'

function DefaultScreen() {
    return (
        <>
            <NavBar />
            <Hero />
            <Cards />
            <About />
            <US />
            <Footer />
        </>
    )
} 

export default DefaultScreen;