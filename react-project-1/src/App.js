import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  return <>
    <Navbar />
    <Carousel />
    <Main />
    <Footer />
  </>
}

export default App;
