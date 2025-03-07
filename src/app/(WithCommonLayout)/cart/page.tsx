"use client"


import CartProducts from "@/components/modules/cart/CartProducts";
import NMContainer from "@/components/ui/core/NMContainer";

const CartPage = () => {
  return (
    <NMContainer>
      <div className=" my-5">
        <CartProducts />
      
      </div>
    </NMContainer>
  );
};

export default CartPage;