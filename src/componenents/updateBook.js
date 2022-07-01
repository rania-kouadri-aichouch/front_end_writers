import { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import useSWR, { mutate } from "swr";
import { fetcher } from "../services/fetcher";
import { useHistory, Link, useParams, Redirect } from "react-router-dom";


const UpdateBook = () => {
  const [name, setName] = useState('');
  const [pages, setPages] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();
 
    const { id } = useParams();
    const { data : book, error } = useSWR(
    
      `https://writers-backend-app.herokuapp.com/api/books/${id}`,
      
    
    fetcher
    );



  const handleSubmit = (e) => {
                const book = { name,pages,price};
                fetch('https://writers-backend-app.herokuapp.com/api/books/'+ id, {
                     method: 'PATCH',
                     headers: { "Content-Type": "application/json" },
                     body: JSON.stringify(book)
                     }).then(() => {
                     history.push('/books');
  })}
    return (
     <div>

      <Navbar/>
      {book && (
     <div className="bg-white py-10 px-5 mx-10 my-24 md:my-24 lg:my-24 md:px-20 md:mx-32  lg:mx-62 rounded-3xl drop-shadow-2xl">
        <div className="p-4">
          <h1 className="font-bold italic sm:text-xl md:text-2xl lg:text-3xl text-gray ">Add book</h1>

        <div className='p-10'>  
       <form  onSubmit={handleSubmit}>
      

        <div className="flex flex-col py-4">
          <label htmlFor="name"></label>
          <input type="text"  value={name} 
          onChange={(e) => setName(e.target.value)}
          className="form-input px-3 py-2 rounded-md border-2 divide-slate-200" placeholder={book.name} required />
        </div>

        <div className="flex flex-col py-4">
          <label htmlFor="pages"></label>
          <input type="pages" value={pages} placeholder= {book.pages}
           onChange={(e) => setPages(e.target.value)}
           className="form-input px-3 py-2 rounded-md border-2 divide-slate-200" required />
        </div>

         <div className="flex flex-col py-4">
          <label htmlFor="price"></label>
          <input type="price"   value={price} placeholder={book.price}
           onChange={(e) => setPrice(e.target.value)}
           className="form-input px-3 py-2 rounded-md border-2 divide-slate-200" required />
        </div>

      <div className="flex justify-end py-4">
        <button type="submit" class="bg-gray-600 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500 shadow-lg shadow-blue-500/50">
          Submit
        </button>
      </div>
    </form>
    </div>
    </div> 
  </div>)}

  <Footer/>
  </div>
    );
}
 
export default UpdateBook;