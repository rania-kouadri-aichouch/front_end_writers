
import useSWR, { mutate } from "swr";
import { fetcher } from "../services/fetcher";
import { useHistory, Link, useParams, Redirect } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const BookDetails = () => {
    const { id } = useParams();
    const { data : book, error } = useSWR(
    
      `https://writers-backend-app.herokuapp.com/api/books/${id}`,
      
    
    fetcher
    );



    const history = useHistory();

    const handleClick = () => {
       
          fetch('https://writers-backend-app.herokuapp.com/api/books/'+ id, {
               method: 'DELETE'
               }).then(() => {
             history.push('/books');
    }) 
  }


 
    return ( 
 
<div className="bg-gray-100">
<Navbar/>
<div >
    {book && (
    <div className="my-5 mx-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
            {/* Left Side -->*/}
            <div className="w-full md:w-3/12 md:mx-2">
                
                <div className="bg-white p-3 border-t-4 border-gray-400">
                    <div className="image overflow-hidden">
                        <img className="h-72 w-full mx-auto"
                            src= {require("../images/afterlife.jpg")} 
                            alt="" />
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{book.name}</h1>
                    <h3 className="text-gray-600 font-lg text-semibold leading-6">About how to get the book</h3>
                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">about</p>
                    
                </div>
                
                <div className="my-4"></div>

            </div>
            
            {/* Right Side */}
            <div className="w-full h-full md:w-9/12 mx-2 h-64">

                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">

                        <h1 className="font-bold italic sm:text-xl md:text-2xl lg:text-3xl text-gray ">About the book !</h1>
                            
       
                        <button className="bg-blue-300 px-5 rounded-xl" onClick={async (e) => {

                         history.push(`/book/update/${book._id}`);

                        }}>update </button>

                        <button onClick={handleClick} className="bg-red-500 px-5 rounded-xl">delete</button>
        
   
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Book's Name</div>
                                <div className="px-4 py-2">{book.name}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Book's price</div>
                                <div className="px-4 py-2">{book.price} DA</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Book's pages</div>
                                <div className="px-4 py-2">{book.pages} page</div>
                            </div>


                        </div>
                    </div>

                </div>



                <div className="bg-gray-100 p-3"></div>

                
                <div>
                 
                    
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <p className="  md:px-24  lg:px-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                </div>  

                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <p className="  md:px-24  lg:px-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                </div> 

  
                </div>
                    
                
               
            </div>
        </div>
    </div>)}
</div>
<Footer/>
</div>
     );
}

export default BookDetails ;
