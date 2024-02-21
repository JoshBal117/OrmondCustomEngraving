import React from 'react'
import './item.css'

const  Item = (props) => {
  
    return (
        <div className='item'>
            <img src={props.image} alt="" />
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