import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const  Item = (props) => {
  
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-prices-current'>
                    ${props.current_price}
                </div>
            </div>        
            
    </div>
    )
}

export default Item