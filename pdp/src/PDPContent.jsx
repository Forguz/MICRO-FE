import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, currency, getProductById } from 'home/products';

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  // useEffect(() => {
  //   getProducts().then(setProducts);
  // }, []);

  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className='flex'>
          <h1 className='flex-grow font-bold text-3xl'>{product.name}</h1>
          <div className='flex-end font-bold text-3xl'>
            {currency.format(product.price)}
          </div>
        </div>
        <div className='mt-10'>{product.description}</div>
        <div className='mt-10'>{product.longDescription}</div>
      </div>
    </div>
  );
}
