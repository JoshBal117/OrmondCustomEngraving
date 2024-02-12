
import './App.css';
import './index.css';
import Navbar from './Components/Assests/Navbar/navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Login from './Pages/LoginSignup.jsx'



function App() {
    return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/tumbler' element={<ShopCategory/>}/>
      <Route path='/Acrylics' element={<ShopCategory/>}/>
      <Route path='/Metals' element={<ShopCategory/>}/>
      <Route path="/Product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path= '/Login' element={<LoginSignup/>}/>

    </Routes>
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
