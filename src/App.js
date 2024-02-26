
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx'
import LoginSignup from './Pages/LoginSingup.jsx'
import Footer from './Components/Footer/Footer.jsx'
import tumbler_banner from './Components/Assests/Images/Tumbler Banner.png'
import services_banner from './Components/Assests/Images/Your Memories.png'

function App() {
    return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Services' element={<ShopCategory banner={services_banner} category="Services"/>}/>
          <Route path='/Acrylics' element={<ShopCategory category="acrylics"/>}/>
          <Route path='/Leather' element={<ShopCategory category="leather"/>}/>
          <Route path='/Tumblers' element={<ShopCategory banner={tumbler_banner} category='tumblers'/>}/>
          <Route path= '/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
         </Route>
         <Route path='/cart' element={<Cart/>}/>
         <Route path= '/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
    
    
    
    )
};

export default App;
