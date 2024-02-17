
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
    

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
         
      </Routes>
      </BrowserRouter>
   
    </div>
    
    
    
    )
};

export default App;
