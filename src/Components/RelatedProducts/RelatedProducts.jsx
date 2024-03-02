import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assests/Data/data'
import Item from '../item/item'
const RelatedProducts = () => {
  return (
    <div>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i) =>{
                return <Item key={i} id={item.id}  name={item.name} image={item.image} current_price={item.current_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts