import React from "react"
import './Popular.css'
import data_product from '../Assests/Data/data'
import Item from '../item/item'

const Popular = () =>{

    return(
        <div className='popular'>
          <h1>Most Popular Items</h1>
          <hr />
          <div className='popular-item'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id}  name={item.name} image={item.image} current_price={item.current_price}/>
            })}
                </div>  
        </div>
    )
}

export default Popular
