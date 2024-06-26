import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Categories from './components/categories/Categories';
import { myInterceptor } from './utils/MyInterceptor';

function App() {
  myInterceptor();
  return <>
    <Navbar />
    {/* <Categories /> */}
    {/* <Carousel /> */}
    <Main />
    <Footer />
  </>
}

export default App;
