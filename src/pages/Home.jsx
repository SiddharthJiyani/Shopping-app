import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () =>{
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts,setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setPosts(data);
        setLoading(false);
    }
    catch(error){
      console.log('error',error);
      setLoading(false);
      setPosts([]);
    }
  };


    useEffect(() => {
      fetchProductData();
    }, []);

    return <div>
      {
        loading ? <Spinner/> : 
        posts.length>0 ? 
        (
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] pt-14 ">
            {
              posts.map((item) => {
                return <Product key={item.id} item={item}/>
              })
            }
          </div>
        ) :
        <div className="flex justify-center items-center">
          <p>No Data found</p>
        </div>
      }
    </div>;
  

}

export default Home;
