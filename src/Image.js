import React from 'react';
import Product from './Product';

const Image = () => (
  <img src={Product.imageUrl} alt={Product.name} className="w-full  object-fit rounded-lg" />
);

export default Image;
