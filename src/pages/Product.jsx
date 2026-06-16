import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const { productID } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productID) {
        setProductData(item)
        console.log(item);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productID])

  return (
    <div>
      
    </div>
  )
}

export default Product