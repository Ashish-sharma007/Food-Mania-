import React from 'react'
import {IMG_CDN} from '../constant'

const ItemCard = ({name,cuisines, maxDeliveryTime,cloudinaryImageId }) => {
  return (
    <div className=''>
    <img src={IMG_CDN+cloudinaryImageId} alt="food"
    className='p-6' />
    <div className='pl-6'>
    <h1 className='text-2xl font-bold'>{name}</h1>
    <h3>{cuisines.join(', ')}</h3>
    <h4>{maxDeliveryTime} minutes</h4>
    </div></div>
  )
}

export default ItemCard