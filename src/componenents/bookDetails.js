
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
                        <img className="h-auto w-full mx-auto"
                            src={book.image}
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
                        <span clas="text-gray-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                            
       
                        
                        <button onClick={handleClick} className="bg-red-500 px-5">delete</button>
        
   
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
