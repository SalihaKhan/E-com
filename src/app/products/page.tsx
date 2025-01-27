'use client';

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Filter from '@/app/component/Filter';

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

// Function to fetch data from Sanity
const getData = async (): Promise<Product[]> => {
  const res: Product[] = await client.fetch(
    `*[_type == "products"]{ 
      _id,
      title,
      price,
      "slug": slug.current,
      badge,
      badgeColor,
      priceWithoutDiscount,
      "imageUrl": image.asset->url
    }`
  );
  return res;
};

// Main ProductPage Component
const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // Defaulting to empty array
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProducts(data); // Set all products to state
      setFilteredProducts(data); // Initially set the filtered products to all products
    };

    fetchData(); // Execute the fetch
  }, []); // Empty array ensures it runs once after component mounts

  return (
    <div id="products" className="p-6">
      <p className="text-[#272343] text-[32px] leading-[35.2px] sm:text-left sm:ml-36 ml-0 sm:mt-14 mt-10 text-center mb-11">
        All Products
      </p>

      {/* Add the Filter component */}
      <Filter products={products} onFilter={setFilteredProducts} />

      {/* Render the filtered products */}
      <div className="grid grid-cols-1 mb-32 gap-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-8 md:px-16 lg:px-44 lg:gap-22 justify-items-center">
        {filteredProducts.map((product) => (
          <Link
            href={`/pages/${product.slug}`}
            key={product._id} // Unique key for each product
            className="w-[212px] h-[212px] rounded-[6px] mb-8 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              {/* Badge */}
              {product.badge && (
                <button
                  className={`py-[4px] sm:py-[6px] px-[8px] sm:px-[10px] mt-2 sm:mt-4 ml-2 sm:ml-4 rounded absolute text-[12px] sm:text-[14px] text-[#FFFFFF]`}
                  style={{
                    backgroundColor: product.badgeColor || '#000', // Default color fallback
                  }}
                >
                  {product.badge}
                </button>
              )}

              {/* Image */}
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="rounded-[6px] w-full h-auto object-cover"
                  width={212}
                  height={212}
                />
              ) : (
                <div className="w-full h-[212px] bg-gray-200 rounded-[6px] flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No Image</span>
                </div>
              )}
            </div>

            {/* Title */}
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-4 text-left">
              {product.title}
            </p>

            {/* Price */}
            <div className="flex justify-between items-center mt-2">
              <div>
                <span>{`$${product.price.toFixed(2)}`}</span>
                {product.priceWithoutDiscount && (
                  <span className="text-[#9A9CAA] line-through ml-1">
                    {`$${product.priceWithoutDiscount.toFixed(2)}`}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
