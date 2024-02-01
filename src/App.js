import logo from './logo.svg';
import './App.css';
import './index.css'

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});




const pre = document.getElementById('pre-btn')
const nxt = document.getElementById('nxt-btn')
const list = document.getElementById('item-list')
const itemWidth = 150
const padding = 10

pre.addEventListener('click', () => {
    list.scrollLeft -= (itemWidth + padding)
})
nxt.addEventListener('click',()=>{
    list.scrollLeft += (itemWidth + padding)
})





function App() {
  return (
    <div>
      <Navbar
    </div>
  

  
  
  
  
  
  );
}

export default App;
