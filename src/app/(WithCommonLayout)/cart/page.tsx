
import CartProducts from "@/components/modules/cart/CartProducts";
import NMContainer from "@/components/ui/core/NMContainer";

const CartPage = () => {
  return (
    <NMContainer>
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />
      </div>
    </NMContainer>
  );
};

export default CartPage;