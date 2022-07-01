import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const history = useHistory();
 



  const handleSubmit = (e) => {
    e.preventDefault();
    const reg = { email,password,age,name,gender,role };

    fetch('http://localhost:8080/api/auth/reg', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reg)
    }).then(() => {
        history.push('/');
       
    })
  }
    return (
     <div className="bg-white py-10 px-5 mx-10 my-24 md:my-24 lg:my-24 md:px-20 md:mx-32  lg:mx-62 rounded-3xl drop-shadow-2xl">
        <div className="p-4">
          <h1 className="font-bold italic sm:text-xl md:text-2xl lg:text-3xl text-gray ">Registration</h1>
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
        <div class="grid grid-cols-2 gap-4">
            <input type="text"  name="name" value={name} 
              onChange={(e) => setName(e.target.value)}
              className="form-input px-3 py-2 rounded-md border-2 divide-slate-200" placeholder='your name' required />


            <input type="text"  name="age" value={age} 
              onChange={(e) => setAge(e.target.value)}
              className="form-input px-3 py-2 rounded-md border-2 divide-slate-200" placeholder='your age' required />

        </div>

        <div class="grid grid-row gap-4">

         <select className="w-full px-3 py-2 rounded-md border-2 divide-slate-200" placeholder="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="writer"> writer </option>
            <option value="reader"> reader</option>
          </select>        

          <select className="w-full px-3 py-2 rounded-md border-2 divide-slate-200" placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="female"> female </option>
            <option value="male"> male </option>
          </select>  

         </div>       

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
    );
}
 
export default Register ;