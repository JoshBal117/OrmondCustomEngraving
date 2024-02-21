
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx'
import LoginSignup from './Pages/LoginSingup.jsx'
    

function App() {
    return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Services' element={<ShopCategory catageory="Services"/>}/>
          <Route path='/Tumblers' element={<ShopCategory category='Tumblers'/>}/>
          <Route path= '/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
         </Route>
         <Route path='/cart' element={<Cart/>}/>
         <Route path= '/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
    
    
    
    )
};

export default App;
