

import Herosection from "./component/Herosection";
import Brandsection from "./component/Brandsection";
import Product from "./component/Product";
import Categories from "./component/Categories";
import Popularstyles from "./component/Popularstyles";

import { CartProvider } from './component/CartContext';








export default function Home() {
  return (
    <div>
       <CartProvider>

 
   
      
      <Herosection />
      <Brandsection />
    
       <Product />
      <Categories />
      <Popularstyles />
     
      </CartProvider>
   
    </div>
  
  );
}
