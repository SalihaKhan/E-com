import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

const getData = async (): Promise<Product[]> => {
  try {
    const res: Product[] = await client.fetch(
      `*[_type == "products" && "featured" in tags ]{
        "imageUrl": image.asset->url,
        _id,
        price,
        title
      }`
    );
    return res;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const FeaturedProducts = () => {
  const [sanityProducts, setSanityProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      setSanityProducts(products);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <p className="text-[#272343] text-2xl sm:text-3xl md:text-4xl font-medium text-center lg:text-left">
          Featured Products
          <Link href="#" className="text-sm md:text-base text-[#007580] hover:text-[#FFA500] ml-8">
            View all
          </Link>
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-28 py-10">
        {isLoading ? (
          <div className="text-center col-span-full text-gray-500">Loading products...</div>
        ) : sanityProducts.length > 0 ? (
          sanityProducts.map((product) => (
            <div key={product._id} className="group relative">
              {/* Image with Hover Effect */}
              <div className="w-full h-72 sm:h-80 md:h-96 relative">
                <Image
                  src={product.imageUrl || '/placeholder-image.png'}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="flex justify-between mt-4">
                <div className="text-[#272343] font-normal text-base sm:text-lg">
                  {product.title}
                </div>
                <div className="font-bold text-base sm:text-lg">
                  {`$${product.price.toFixed(2)}`}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No featured products found.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
