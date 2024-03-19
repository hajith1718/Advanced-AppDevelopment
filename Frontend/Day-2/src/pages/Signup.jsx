import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
function Login() {
    const [error, setError] = useState({});
    const [login, setLogin] = useState(
        {
            name:"",
            email:"",
            password: "",
            cfpassword:"",
            age:0,
            ph:""
        }
    )
    const handleChange = (e) => {
      setLogin({...login, [e.target.id]:e.target.value})
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    localStorage.setItem('Name', login.name);
    localStorage.setItem('Email', login.email);
    localStorage.setItem('Password', login.password);
    localStorage.setItem('Age', login.age);
    localStorage.setItem('Phone', login.ph);
    // console.log(login.email);
    let validationErrors ={};
    if (!login.name.trim()) {
        validationErrors.name = "Name is required";
    }
    if (login.age===0) {
        validationErrors.age="Age is required";
    }
    if (!login.ph.trim()) {
        validationErrors.ph = "Contact Number is required";
    }
    if (!login.email.trim()) {
        validationErrors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(login.email)) {
        validationErrors.email = "Email is invalid";
    }
    if(login.age<18)
    {
        validationErrors.age="Age is below 18";
    }
    if (!login.password.trim()) {
        validationErrors.password = "Password is required";
    }
    else if (login.password.length < 8) {
        validationErrors.password ="The password must be 8 characters or longer";
    }
    if(login.password!=login.cfpassword || login.cfpassword.length < 8 )
    {
        validationErrors.cfpassword ="The password does not match";
    }
    setError(validationErrors);
    console.log(login.email);
    if (Object.keys(validationErrors).length === 0) {
      toast.success("Welcome", { autoClose: 3000 })
      }
      else {
        toast.warning("Invalid", { autoClose: 10000 });
      }    
    }

  return (
   <>
   <div className=" bg-blue-200 h-screen w-full flex items-center justify-center">    
       <div className='mt-3 py-7 px-7 bg-opacity-75 flex flex-col justify-center rounded-md '>
        <p className='text-[3.1rem] text-center pb-[4rem]  font-serif'>SIGN UP</p>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "  onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-5 mt=2 '>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" placeholder="Name" onChange={handleChange}/>
            {error.name && <span className='text-red-600 text-sm '>{error.name}</span>}
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="text" placeholder="Email" onChange={handleChange}/>
            {error.email && <span className='text-red-600 text-sm'>{error.email}</span>}
        </div>
       <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="*******" onChange={handleChange}/>
            {error.password && <span className='text-red-600 text-sm'>{error.password}</span>}
      </div>
       <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >Confirm Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="cfpassword" id="cfpassword" type="password" placeholder="*******" onChange={handleChange}/>
            {error.cfpassword && <span className='text-red-600 text-sm'>{error.cfpassword}</span>}
      </div>
       <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >Age</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="age" id="age" min='18' type="number" oninput="validity.valid||(value='');"  onChange={handleChange} />
            {error.age && <span className='text-red-600 text-sm'>{error.age}</span>}
      </div>
       <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >Contact Number(Format: 91-8213129011)</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="ph" id="ph" type="tel" pattern="[0-9]{2}-[0-9]{10}"  onChange={handleChange}/>
            {error.ph && <span className='text-red-600 text-sm'>{error.ph}</span>}
      </div>
      </div>
      <div class="flex  justify-center" onClick={() => navigate("/signup")}>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >Sign Up</button>
      </div>
      </form>
      {/* <div className='flex justify-center'>
        <button class="bg-white hover:bg-blue-600 hover:text-white text-blue-600 font-bold my-7 py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center " type="button">Sign Up</button>
      </div> */}
  </div>
  </div>
   </>
  )
}

export default Login;