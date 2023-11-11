import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({item}) => {
  const [selected, setSelected] = useState(false);
  const {cart} = useSelector((state) => state) ;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item)) ;
    toast.success('Item added to cart');
  }

  const removeFromCart = () =>{
    console.log("remove");
    dispatch(remove(item.id));
    toast.error('Item removed from cart');

  }
 
  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
      <div>
        <p 
          className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"
        >{item.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={`${item.image}`} alt="" className="h-full w-full object-contain " />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
       <div className="text-green-600 font-semibold" >${item.price}</div>
        <button>
          {
            cart.some((i) => i.id == item.id) ?
            // cart.some((i) => i.id == item.id) -> this line checks if the item is already present in the cart or not
            // if the item is present in the cart then it will return true else false
            // if the item is present in the cart then we will show remove item button else add to cart button
           ( <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
           text-[12px] p-1 px-3 uppercase 
           hover:bg-gray-700
           hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>Remove Item</button>) :
           ( <button onClick={addToCart} 
             className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
           >Add to Cart</button>)
          }
        </button>
      </div>
    </div>
  );
};

export default Product;
