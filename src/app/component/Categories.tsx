'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

interface Category {
  _id: string;
  title: string;
  products: number;
  slug: string;  // Ensure you have a slug field in the data
  imageUrl?: string;
}

const getCategories = async (): Promise<Category[]> => {
  try {
    const res: Category[] = await client.fetch(
      `*[_type == "categories"]{
        _id,
        title,
        products,
        "slug": slug.current,  // Ensure slug is fetched correctly
        "imageUrl": image.asset->url
      }`
    );
    return res;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
      setIsLoading(false);
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <div className="text-center mt-20">Loading categories...</div>;
  }

  if (categories.length === 0) {
    return <div className="text-center mt-20">No categories found</div>;
  }

  return (
    <div className="sm:mb-96 mb-28 px-4 sm:px-0">
      <div>
        <p className="text-[#272343] text-[32px] leading-[35.2px] text-center sm:text-left font-inter sm:ml-44 mb-11">
          Top categories
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
        {categories.map((category) => (
          <Link href={`/products/${category.slug}`} key={category._id}>
            <div className="w-full max-w-[324px] sm:ml-40 ml-0  h-[424px] rounded-[10px] overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={category.imageUrl || '/fallback.png'}
                alt={category.title}
                width={324}
                height={424}
                className="w-full h-[70%] object-cover"
              />
              <div className="bg-[#000000B2] p-[20px] rounded-br-[10px]">
                <h1 className="text-[#FFFFFF] font-bold text-[20px] leading-[22px]">{category.title}</h1>
                <p className="text-[#FFFFFF]">{category.products} Products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
