import {FaShoppingCart} from 'react-icons/fa'; 
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart} = useSelector((state) => state) ;

  return( 
  <div className='bg-[#232f3e] w-screen fixed z-[99]'>

    <div className="flex items-center justify-between h-20  max-w-6xl mx-auto bg-[#232f3e] ">

        <NavLink to="/">
          <div className="ml-5">
          {/* <img src="https://api.logo.com/api/v2/images?logo=logo_8dc480e6-2a1f-4244-89c2-96ae6c7b2b8a&format=webp&margins=0&quality=60&width=500&background=transparent&u=1693713599"alt="" className="h-14" width={200} height={100} /> */}
          <img src="./Logo-HD.svg"alt="" className="h-14" width={200} height={100} />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to='/'>
            <p className=' hover:text-green-500 transition duration-200 text-lg'>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl hover:rotate-[360deg] hover:text-green-500 transition duration-1000 "/>
              {
                cart.length>0 ?
                (<span 
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white" 
                >{cart.length}</span>) :
                (<span></span>)
              }
            </div>
          </NavLink>
        </div>
      </div>  

  </div>);
};

export default Navbar;
