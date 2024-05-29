// PremiumPriceList.js
import React from 'react';
import { Link } from 'react-router-dom';

const PremiumPriceList = () => {
    return (
        <div className="bg-white py-8 mt-24 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Premium Plans</h2>
                <div className='bg-slate-200 p-6 sm:p-12 md:p-24 rounded-lg shadow-lg'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Premium plan cards */}
                        <div className="flex justify-center">
                            <img 
                                src="https://img.freepik.com/premium-vector/cheerful-caucasian-woman-with-bright-smile-monochromatic-flat-vector-character-happiness-emotion-editable-line-half-body-person-white-simple-bw-cartoon-spot-image-web-graphic-design_151150-16671.jpg" 
                                alt="Description of the image" 
                                className="w-full max-w-xs object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="bg-blue-200 p-6 sm:p-10 rounded-lg shadow-md">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Monthly Plan</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="text-xl sm:text-2xl text-green-900 font-bold mt-4">$19.99</p>
                            <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Subscribe</button>
                        </div>
                        
                        <div className="bg-blue-200 p-6 sm:p-10 rounded-lg shadow-md">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Annual Plan</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="text-xl sm:text-2xl text-green-900 font-bold mt-4">$199.99</p>
                            <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Subscribe</button>
                        </div>
                        {/* Add more premium plans as needed */}
                    </div>
                </div>
                
                <Link to='/pr'>
                    <h1 className='text-center mt-10 font-bold underline text-lg'>View More Plans</h1>
                </Link>
            </div>
        </div>
    );
};

export default PremiumPriceList;
