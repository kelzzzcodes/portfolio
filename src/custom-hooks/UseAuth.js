import { useEffect,useState } from "react"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const UseAuth = () =>{
    const navigate = useNavigate();
const [currentUser, setCurrentUser] = useState(null);

 useEffect(() => {
  
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        navigate('/dashboard')

      } else {
        setCurrentUser(null);
      }

    } )
    return unsubscribe;
 
 }, [])
 
 return currentUser;
}

export default UseAuth;
