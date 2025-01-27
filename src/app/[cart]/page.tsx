// app/cart.tsx (Cart Page)

'use client';

import { useCart } from '@/app/component/CartContext'; // Import the Cart context
import Image from 'next/image';
import hearticon from "@/app/assets/Frame (1).png";
import deleteicon from "@/app/assets/Frame (2).png";
import orangechair from "@/app/assets/Image (2).png";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };
  const handleCheckout = (): void => {
    alert('Proceeding to Checkout!');
  };

  const subtotal: number = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/4 px-4 lg:px-8">
  {cart.length > 0 ? (
    cart.map((item) => (
      <div key={item.id} className="flex flex-col sm:flex-row mb-8 items-center lg:px-36 border-b pb-8">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <Image
            src={item.image || orangechair}
            alt={item.name}
            width={150}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="ml-4 flex-grow text-center sm:text-left">
          <p className="text-lg font-semibold text-gray-800">{item.name}</p>
          <p className="text-lg font-medium text-gray-600 mt-2">${item.price.toFixed(2)}</p>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
            <button
              onClick={() => handleQuantityChange(item.id, -1)}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full transition-all duration-300 hover:bg-teal-600 hover:text-white disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <p className="font-semibold text-gray-800">{item.quantity}</p>
            <button
              onClick={() => handleQuantityChange(item.id, 1)}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full transition-all duration-300 hover:bg-teal-600 hover:text-white"
            >
              +
            </button>
          </div>

          {/* Remove Item Button */}
          <div className="flex justify-center sm:justify-start mt-4">
            <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
              <Image src={deleteicon} alt="Remove" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-600 mt-10">Your cart is empty.</p>
  )}
</div>

      <div className="w-full lg:w-1/4 px-4 mt-10 lg:mt-0">
    <div className="bg-gray-100 p-6 rounded-lg">
      <h1 className="text-xl font-medium text-gray-900 mb-5 text-center lg:text-left">
        Summary
      </h1>
      <div className="flex justify-between mb-4">
        <h2 className="text-gray-800">Subtotal</h2>
        <p className="text-gray-800">${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">Estimated Delivery & Handling</p>
        <p className="text-gray-800">Free</p>
      </div>
      <div className="flex justify-between border-t pt-4 mb-5">
        <div className="text-gray-800">Total</div>
        <div className="font-semibold text-gray-900">${subtotal.toFixed(2)}</div>
      </div>
      <button
        className="w-full bg-[#029FAE] text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300"
        onClick={handleCheckout}
      >
        Member Checkout
      </button>
    </div>
  </div>
    </div>
  );
};

export default CartPage;
