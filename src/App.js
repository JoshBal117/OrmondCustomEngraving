
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx;'
import LoginSignup from './Pages/LoginSingup.jsx'
    

function App() {
    return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/awards' element={<ShopCategory/>}/>
          <Route path='/tumblers' element={<ShopCategory/>}/>
          <Route path='/stones' element={<ShopCategory/>}/>
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
