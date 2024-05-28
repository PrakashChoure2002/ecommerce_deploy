import React from 'react';

const Productview = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <div className="p-3 border rounded-lg max-w-md mx-auto bg-white cursor-pointer border-black hover:border-red-400/100 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">X</button>
      
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-4">
          <p className='text-black font-bold'>Color:</p>
          <select className="border rounded-md p-1 mt-1">
            <option value="red" className='text-red-500'>Red</option>
            <option value="blue" className='text-blue-500'>Blue</option>
            <option value="purple" className='text-purple-500'>Purple</option>
          </select>
          <p className='text-black font-bold mt-2'>Brand</p>
          <select className="border border-gray-300 rounded-md p-1 mt-1">
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            <option value="brand3">Brand 3</option>
          </select>
        </div>
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-auto object-cover rounded-xl my-4"/>
      </div>
      <h1 className="text-xl font-bold text-center text-black">{product.title}</h1>
      <p className="text-gray-700 text-center font-bold">Price: RS.{product.price}</p>
      <p className="text-gray-700 text-center font-bold">Description:{product.description}</p>
      
      <div className="flex justify-center items-center">
        <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Add to Cart</button>
      </div>
    </div>
  );
};

export default Productview;
