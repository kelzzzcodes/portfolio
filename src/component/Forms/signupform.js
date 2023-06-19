import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useNavigate } from 'react-router-dom';


const signupform = () => {

  const [emailSignUp, setEmailSignup] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const navigate = useNavigate()
  const Signup = async () =>{
    try {
      const email = emailSignUp;
      const password = passwordSignUp;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log(user )
      setEmailSignup('');
      setPasswordSignUp('');
      navigate("/signin")
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="font-bold text-2xl">Sign Up</h1>
      <form className="flex flex-col gap-2 w-[400px]">
    
        <label>Email</label>
        <input
          type="email"
          value={emailSignUp}
          onChange={(e) => setEmailSignup(e.target.value)}
          placeholder="Email"
          className="w-full rounded-md bg-transparent p-2 focus:outline-none focus:ring focus:ring-white"
        />
        <label>Password</label>
        <input
          type="password"
          value={passwordSignUp}
           onChange={(e) => setPasswordSignUp(e.target.value)}
          placeholder="Password"
          className="w-full rounded-md bg-transparent p-2 focus:outline-none focus:ring focus:ring-white "
        />

        <button
          type="button"
          className="rounded px-4 py-2 text-sm font-medium leading-normal text-black transition duration-150 ease-in-out  bg-neutral-300 border-2 border-transparent hover:bg-neutral-600 hover:text-white  hover:border-2 
          hover:border-white"
         onClick={Signup}
        >
          Sign up
        </button>
      </form>

      <p className="items-center flex justify-center gap-2">
        Already a member?
        <Link className=" text-blue-700" to="/signin">
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default signupform
