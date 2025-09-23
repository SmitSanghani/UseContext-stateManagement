import React from 'react'
import Image from './Image'
import ProductDetail from './ProductDetail'

const Card = ({ProductData,theme}) => {
  return (
    <div>
        <Image ProductImg = {ProductData.img} theme={theme}/>
        <ProductDetail data={ProductData} theme={theme}/>
        
    </div>
  )
}

export default Card