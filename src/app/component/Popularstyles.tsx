'use client';

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  _id: string; // Sanity's unique ID
  title: string;
  imageUrl?: string;
}

const fetchInstagramProducts = async (): Promise<Product[]> => {
  try {
    const query = `*[_type == "products" && "instagram" in tags]{
      "imageUrl": image.asset->url,
      _id,
    }`;

    console.log('Sanity Query:', query); // Debug: Output query being used
    const res: Product[] = await client.fetch(query);

    console.log('Fetched Products:', res); // Debug: Output fetched products
    return res;
  } catch (error) {
    console.error('Error fetching Instagram products:', error);
    return [];
  }
};

const Instagramproducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      console.log('Fetching Instagram products...');
      const fetchedProducts = await fetchInstagramProducts();
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, []);

  return (
    <div className="bg-[#1E28320D] mt-64 mb-16 px-4 sm:px-8 lg:px-16">
      {/* Newsletter Subscription Section */}
      <div className="mt-44 mb-28">
        <p className="text-[#272343] py-11 leading-[58.59px] font-medium text-3xl sm:text-4xl md:text-5xl text-center font-roboto">
          Or subscribe to the newsletter
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 mb-16 justify-center">
        <input
          type="text"
          placeholder="Email Address..."
          className="border-b-2 bg-[#1E28320D] border-gray-300 focus:outline-none focus:border-gray-500 w-64 text-left"
          aria-label="Email input for newsletter subscription"
        />
        <button className="text-[#1E2832] underline underline-offset-4 hover:text-gray-700 mt-4 sm:mt-0" aria-label="Submit email for newsletter subscription">
          SUBMIT
        </button>
      </div>

      {/* Instagram Section */}
      <div>
        <p className="text-[#272343] leading-[58.59px] font-medium text-3xl sm:text-4xl md:text-5xl text-center font-roboto">
          Follow products and discounts on Instagram
        </p>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 mb-20">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="flex flex-col items-center justify-center">
              <Image
                src={product.imageUrl || 'https://via.placeholder.com/156'}
                alt={`Image of ${product.title}`} // Descriptive alt text for SEO and accessibility
                width={156}
                height={156}
                className="w-[156px] h-[156px] object-cover rounded-lg"
                loading="lazy"  // Lazy load for performance optimization
                aria-label={`Product image for ${product.title}`}
              />
              <p className="mt-2 text-center text-sm text-gray-700" aria-label={`Product title: ${product.title}`}>
                {product.title}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products found. Please check back later!
          </p>
        )}
      </div>
    </div>
  );
};

export default Instagramproducts;
