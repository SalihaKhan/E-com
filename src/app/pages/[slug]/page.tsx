'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Pinksofa from '@/app/assets/Image (1).png';
import cart from '@/app/assets/Group (2).png';
import Instagramproducts from '@/app/component/Instagramproducts';
import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/app/component/CartContext';

// Define Product Interface
interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl?: string;
  description?: string;
  ratings?: number;
  reviews?: string[];
}

const getData = async (slug: string): Promise<Product | null> => {
  try {
    const res: Product[] = await client.fetch(
      `*[_type == "products" && slug.current == $slug] {
        "imageUrl": image.asset->url,
        _id,
        price,
        title,
        description,
        slug,
        ratings,
        reviews
      }`,
      { slug }
    );
    return res[0] || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

const Page = () => {
  let { slug } = useParams();
  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchProductData = async () => {
      if (slug) {
        try {
          const fetchedProduct = await getData(slug);
          if (!fetchedProduct) {
            setError('Product not found. Please check the URL or try again later.');
          } else {
            setProduct(fetchedProduct);
          }
        } catch (err) {
          setError('There was an error while fetching the product. Please try again later.');
          console.error('Error fetching product data:', err);
        }
        setLoading(false);
      }
    };
    fetchProductData();
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product._id,
        name: product.title,
        price: product.price,
        image: product.imageUrl || '',
        quantity: 1,
      };
      addToCart(cartItem);
      router.push('/cart');
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-16 px-4 lg:flex items-center justify-between">
        {/* Product Images (Carousel) */}
        <div className="flex flex-col lg:w-1/2 items-center mb-6 lg:mb-0">
          <div className="w-full flex justify-center overflow-hidden rounded-lg">
            <Image
              src={product?.imageUrl || Pinksofa}
              alt={product?.title || 'Product Image'}
              className="object-contain transition-transform duration-300 transform hover:scale-105"
              width={500}
              height={500}
            />
          </div>
          {/* Placeholder for carousel (you can use a carousel library here) */}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl leading-tight mb-4 text-gray-800">
            {product?.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">${product?.price.toFixed(2)} USD</p>

          {/* Product Rating */}
          {product?.ratings && (
            <div className="mb-4">
              <p className="text-yellow-500 text-lg">
                {product.ratings} ⭐
              </p>
            </div>
          )}

          {/* Product Description */}
          <p className="text-gray-700 text-base mb-8 max-w-lg">
            {product?.description || 'No description available.'}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full sm:w-[250px] py-3 bg-[#029FAE] text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300 flex justify-center items-center gap-2 mb-6"
          >
            <Image src={cart} alt="Cart Icon" className="w-5 h-5" />
            Add To Cart
          </button>

          {/* Product Reviews */}
          {product?.reviews && product.reviews.length > 0 && (
            <div className="mt-6 text-gray-600">
              <h3 className="font-semibold text-lg">Customer Reviews:</h3>
              <ul className="mt-2">
                {product.reviews.map((review, index) => (
                  <li key={index} className="text-sm mb-2">- {review}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Instagram Products Section */}
      <Instagramproducts />
    </div>
  );
};

export default Page;
