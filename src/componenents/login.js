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
 



  const handleSubmit = (e) => {
    {
                const log = { email,password };

                const res = login(log);
                
                if (res && res.status === 200 && res.data) {
                  console.log("done");
                  const token = res.data.accessToken;
                  const user = jwt(res.data.accessToken);
                  setStore({
                    ...store,
                    token,
                    user,
                    isLogged: true,
                  });
                  storeTheUser(user, token);
                  history.push('/books');
                  
                }  
                
                else {
                  console.log(res, "try again");

                }
              }
  }
    return (
     <div>

      <Navbar/>
     <div className="bg-white py-10 px-5 mx-10 my-24 md:my-24 lg:my-24 md:px-20 md:mx-32  lg:mx-62 rounded-3xl drop-shadow-2xl">
        <div className="p-4">
          <h1 className="font-bold italic sm:text-xl md:text-2xl lg:text-3xl text-gray ">Welcome !</h1>
        <div class="grid sm:grid-row lg:grid-cols-2 "> 
        <div className='p-10'>
            <img
          className="sm:h-72 sm:w-full md:h-full lg:w-full lg:h-full lg:mt-0"
          src={require("../images/woman.jpg")}
          alt=""
        />
            
         </div>
        <div className='p-10'>  
    <form  onSubmit={handleSubmit}>
      

        <div className="flex flex-col py-4">
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="form-input px-3 py-2 rounded-md border-2 divide-slate-200" placeholder='your email' required />
        </div>

        <div className="flex flex-col py-4">
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" value={password} placeholder='your password'
           onChange={(e) => setPassword(e.target.value)}
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
  </div>
  </div>
  <Footer/>
  </div>
    );
}
 
export default Login ;