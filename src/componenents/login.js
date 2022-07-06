import { useState ,useContext } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import { storeContext } from "./../global/store";
import jwt from "jwt-decode";
import { login, storeTheUser} from "./../services/auth";


const Login = () => {
  const { store, setStore } = useContext(storeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [isLogged, setIsLogged] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    const user={email ,password}

    fetch('https://writers-backend-app.herokuapp.com/api/auth/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then((response) => {
       if(response.status === 200){history.push('/books');}
       else{
         setIsLogged("Please try again");
       }
        
       
    })
  }
 
    return (
<div className="bg-gray-200">

    <Navbar/>
<div className="bg-white  md:my-24 lg:my-24 md:px-20 md:mx-32  lg:mx-72 rounded-3xl drop-shadow-2xl">
        <div className="p-4">
          
  <div class="grid sm:grid-row lg:grid-cols-2 "> 
        <div className=''>
            <img
          className="md:h-full md:w-full lg:h-full lg:w-full rounded-3xl"
          src={require("../images/woman.jpg")}
          alt=""
        />
            
       </div>
  <div><h1 className="font-bold italic sm:text-xl md:text-2xl lg:text-3xl text-gray ">Welcome !</h1>  
  <p className="text-red-500">{isLogged}</p>   
  <div className='p-10'> 
    
    <form  onSubmit={handleSubmit}>
      

        <div className="flex flex-col py-4">
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="form-input lg:px-3 py-2 rounded-md border-2 divide-slate-200" placeholder='your email' required />
        </div>

        <div className="flex flex-col py-4">
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" value={password} placeholder='your password'
           onChange={(e) => setPassword(e.target.value)}
           className="form-input lg:px-3 py-2 rounded-md border-2 divide-slate-200" required />
        </div>

      
      <div className="flex justify-center ">
        <button type="submit" class="bg-gray-600 text-white font-bold py-2 px-24 lg:px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500 shadow-lg shadow-blue-500/50">
          Login
        </button>
      </div>
    </form>
    </div>
    </div>
    </div>
     
  </div>
  </div>
  <Footer/>
  </div>
    );
}
 
export default Login ;