'use client';

import React, { useState } from 'react';

interface Product {
    _id: string;
    title: string;
    slug: string;
    price: number;
    badge?: string;
    badgeColor?: string;
    priceWithoutDiscount?: number;
    imageUrl?: string;
  }


interface FilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const Filter: React.FC<FilterProps> = ({ products, onFilter }) => {
  const [minPrice, setMinPrice] = useState<number>(0); // Set initial min price
  const [maxPrice, setMaxPrice] = useState<number>(1000); // Set initial max price

  // Price range filter function
  const handleFilter = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    onFilter(filtered); // Update the filtered product list
  };

  // Reset filter function
  const handleResetFilter = () => {
    setMinPrice(0);
    setMaxPrice(100);
    onFilter(products); // Reset to show all products
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8 mx-4 sm:mx-8 lg:mx-44">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Price Filters */}
        <div className="flex space-x-4 mb-6 sm:mb-0">
          <div className="flex flex-col items-start space-y-1">
            <label htmlFor="minPrice" className="text-sm font-semibold text-gray-700">Min Price</label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          
          <div className="flex flex-col items-start space-y-1">
            <label htmlFor="maxPrice" className="text-sm font-semibold text-gray-700">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleFilter}
            className="bg-[#007580] text-white px-6 py-2 rounded-md hover:bg-[#005f59] transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Apply Filter
          </button>
          <button
            onClick={handleResetFilter}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
