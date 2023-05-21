import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-between border-4  '>
       <Link to="/"> <img src="https://5.imimg.com/data5/ANDROID/Default/2021/5/EZ/FT/GZ/130133306/product-jpeg-1000x1000.jpg" alt="logo" className='h-20' /></Link>
        <ul className='flex gap-4 mt-6 mr-4'>
            <Link to = '/'><li>Home</li></Link>
            <li>Products</li>
            <li>Offers</li>
           <Link to = '/about'> <li>About Us </li></Link>
        </ul>
    </div>
  )
}

export default Header