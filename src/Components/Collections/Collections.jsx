import React from 'react'
import './Collection.css'
import new_collection from '../Assests/Data/new_collections'
import Item from '../item/item'


const Collections= () => {
    return (
        <div className='Collections'>
            <h1>New Collection in our Shop</h1>
            <hr />
            <div className='product-collections'>
                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id}  name={item.name} image={item.image} current_price={item.current_price}/>
                })}
            </div>
        </div>
    )
}

export default Collections
