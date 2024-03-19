import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
function Login() {
    const navigate=useNavigate();
    const [error, setError] = useState({});
    const [login, setLogin] = useState(
        {
            email:"",
            password: ""
        }
    )
    const handleChange = (e) => {
      setLogin({...login, [e.target.id]:e.target.value})
  };
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setError({});
    localStorage.setItem('Email', login.email);
    localStorage.setItem('Password', login.password);
    // console.log(login.email);
    let validationErrors ={};
    if (!login.email.trim()) {
        validationErrors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(login.email)) {
        validationErrors.email = "Email is invalid";
    }
    if (!login.password.trim()) {
        validationErrors.password = "Password is required";
    }
    else if (login.password.length < 8) {
      validationErrors.password ="The password must be 8 characters or longer";
    }
    setError(validationErrors);
    console.log(login.email);
    const a=localStorage.getItem('Email')
    const b=localStorage.getItem('Password')
    if (Object.keys(validationErrors).length === 0) {
      if(a==="admin@gmail.com" && b==="adminpassword")
      {
        console.log(b);
        navigate('/admindb');
      }
      else
      {
        console.log(b);
        navigate('/userdb/userbookings')
      }
      }
      else {
        toast.warning("Invalid", { autoClose: 10000 });
      }    
    }

  return (
   <>
   <div className='bg-blue-200 h-screen w-full'>
        <p className='text-[3.1rem] text-center  p-[2rem] font-serif'>LOGIN</p>
        <div className='pt-[4rem] flex items-center justify-center'>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[20rem]"  onSubmit={handleSubmit}>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="text" placeholder="Username" onChange={handleChange}/>
            {error.email && <span className='text-red-600 text-sm'>{error.email}</span>}
        </div>
       <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" >Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="*******" onChange={handleChange}/>
            {error.password && <span className='text-red-600 text-sm'>{error.password}</span>}
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >Sign In</button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >Forgot Password?</a>
      </div>
      <div className='flex justify-center'>
        <Link to="/Signup"><button class="bg-white hover:bg-blue-600 hover:text-white text-blue-600 font-bold my-7 py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center " type="button" >Sign Up</button></Link>
      </div>
      </form>
  </div>
  {/* <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce/> */}
   </div>
   </>
  )
}

export default Login;