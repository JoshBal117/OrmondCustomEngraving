import React from 'react'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="prodisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.img} alt="" />
                <img src={product.img} alt="" />
                <img src={product.img} alt="" />
                <img src={product.img} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img'src={product.image} alt="" />
            </div>
        </div>
        <div className="displayproduct-right">
            <h1>{product.name}</h1>
            
           
        </div>
    </div>
  )
}

export default ProductDisplay