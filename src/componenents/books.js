import useSWR, { mutate } from "swr";
import { fetcher } from "../services/fetcher";
import Footer from "./footer";
import Navbar from "./navbar";
import { Link, useHistory } from "react-router-dom";

const Books = () => {

    const { data, error } = useSWR('https://writers-backend-app.herokuapp.com/api/books/', fetcher);

    return ( 

        <div>
        <Navbar/> 

        <div className="sm:mx-25 ">
            <h1 className="font-bold py-10 text-xl md:text-2xl lg:text-3xl  ">Books</h1>
            <p className="mx-10 md:px-40  lg:px-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
        </div>

        <div class="bg-white  p-4 sm:py-6 lg:p-4  lg:m-10 xl:px-8 xl:py-6">
           <form class="group relative">
              <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
               </svg>
            <input class=" border-4 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter books" placeholder="Filter books..." />
           </form>
        </div>
        <div className="sm:px-5 md:px-24 lg:px-24">
        <div class="grid  gap-1 content-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

            {
            
              data &&
              data.map(book => (<BookItem
                key={book.id}
                name={book.name}                
                price={book.price}
                pages ={book.pages}
                book ={book}
                className="m-10"  
                           
              >
 
              </BookItem>
              
              
            )) 
            }
            
           
        </div>
        </div>

        <Footer/>

        </div>
     );
}
 
export default Books ;


const BookItem = ({key,name,price,pages,book}) => {
    const history = useHistory();
    return ( 
        <div className="py-5 " >
          

              <div key={key} class="box-border shadow-lg  h-auto w-auto mx-5 p-4 border-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-blue-500/50  duration-300">
                   <div className="text-gray-600 p-5 text-xl font-bold">
                         {name} 
                    </div>
                   <img src={require("../images/resized.jpeg")} />

                    <div className="grid grid-row-2 sm:gap-2 lg:grid-row-3 lg:gap-6">
                       
                       <div className="grid grid-row-4 gap-4 lg:grid-cols-3 lg:gap-30">
               
                
                               <div><h2 className="text-blue-600 text-xl">price :</h2> {price} DA</div>
                               <div><h2 className="text-blue-600 text-xl">pages :</h2> {pages} Page</div>
                
            
                      </div>

                    {book  && (<button className="bg-gray-300" onClick={async (e) => {
                         
                         e.preventDefault();
                         history.push(`/book/details/${book.id}`);

                    }}>Book details </button>)}

                    


                    </div>
                    

                   
               </div> 

 

            

          

        </div>
     );
}

