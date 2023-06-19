import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
const loginform = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   
}
  return (

    <div className="flex flex-col gap-4 ">
        <h1 className=" font-bold text-2xl">Sign In</h1>
        <form className="flex flex-col gap-2 w-[400px]">
            <label>Email</label>
            <input type='email' name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <label>Password</label>
            <input type='password' name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
            <button
              type="button"
              className="rounded  px-4 py-2 text-sm font-medium leading-normal text-black transition duration-150 ease-in-out  bg-neutral-300 border-2 border-transparent hover:bg-neutral-600 hover:text-white  hover:border-2 hover:border-white"
              onClick={onLogin} 
            >
           Log in
            </button>

        </form>

        <p className="items-center flex justify-center gap-2">Not a member? <Link className=" text-blue-700" to='/signup'>Sign up</Link></p>


    </div>
  )
}

export default loginform