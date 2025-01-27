'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import cart2 from "@/app/assets/cart (2).png";
import Link from "next/link";
import Head from 'next/head';

interface Product {
  _id: string; // Sanity's unique ID
  title: string;
  price: number;
  badge?: string;
  badgeColor?: string;
  priceWithoutDiscount?: number;
  imageUrl?: string;
}

const getData = async (): Promise<Product[]> => {
  const res: Product[] = await client.fetch(
    `*[_type == "products" && "featured" in tags]{
      "imageUrl": image.asset->url,
      _id,
      price,
      priceWithoutDiscount,
      title,
      badge,
      badgeColor
    }`
  );
  return res;
};

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to hold products
  const [loading, setLoading] = useState<boolean>(true); // To manage loading state

  useEffect(() => {
    // Fetch the data when the component mounts
    const fetchProducts = async () => {
      const data = await getData();
      setProducts(data);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchProducts(); // Call the fetch function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner if needed
  }

  return (
    <>
      <Head>
        <title>Featured Products</title>
        <meta name="description" content="Check out our collection of featured products." />
      </Head>

      <Link href="/products" aria-label="View all products">
        <div className="px-4 sm:px-16 lg:px-44 mt-10 mb-32">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 justify-items-center">
            {products.map((product) => (
              <div
                key={product._id}
                className="w-[212px] sm:w-[212px] md:w-[212px] lg:w-[212px] h-[212px] rounded-[6px] mb-8 transition-transform duration-300 hover:scale-105"
                role="listitem"
                aria-labelledby={`product-${product._id}`}
              >
                <div className="relative">
                  {product.badge && (
                    <span
                      className={`py-[4px] sm:py-[6px] px-[8px] sm:px-[10px] mt-2 sm:mt-4 ml-2 sm:ml-4 rounded absolute text-[12px] sm:text-[14px] text-[#FFFFFF]`}
                      style={{ backgroundColor: product.badgeColor || "#000" }}
                      aria-label={`Product badge: ${product.badge}`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.imageUrl || "/placeholder.png"}
                    alt={`Image of ${product.title}, a ${product.badge ? product.badge : 'featured'} product`}
                    width={212}
                    height={212}
                    className="rounded-[6px] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <p id={`product-${product._id}`} className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-4 text-left">
                  {product.title}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <span aria-label={`Price: $${product.price.toFixed(2)}`}>{`$${product.price.toFixed(2)}`}</span>
                    {product.priceWithoutDiscount && (
                      <span className="text-[#9A9CAA] line-through ml-1" aria-label={`Original price: $${product.priceWithoutDiscount.toFixed(2)}`}>
                        {`$${product.priceWithoutDiscount.toFixed(2)}`}
                      </span>
                    )}
                  </div>
                  <Image
                    src={cart2}
                    alt="Add to cart"
                    className="w-[16px] h-[16px]"
                    aria-label="Add this product to the cart"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
