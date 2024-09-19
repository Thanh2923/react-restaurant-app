import CartItem from "./CartItem"

const CartItemContainer = () => {
  return (
    <div className=" mb-10 absolute overflow-y-scroll scrollbar-none scrollbar-hidden  right-0 flex flex-col gap-3 bottom-0 0 w-full py-10 px-5 h-[80%] rounded-t-[2rem]  shadow-lg bg-cartBg" >
    <CartItem/>
    
    </div>
  )
}

export default CartItemContainer
