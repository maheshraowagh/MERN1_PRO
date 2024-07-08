/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState}  from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

const[token,setToken] = useState(localStorage.getItem("token"))
const [user, setUser] = useState("")
const[isLoading,setIsLoading] = useState(true)
const[services,setServices] = useState([])
 const authorizationToken = `Bearer ${token}`
// console.log(user)
  

const API = import.meta.env.VITE_URI_API;

const storeTokenInLS = (serverToken)=>{
      setToken( serverToken);
     return localStorage.setItem("token", serverToken)
    };

   

    const LogoutUser =()=>{
     setToken("");
     setUser("")
     return localStorage.removeItem("token")
     
    };

    
const isLogged = !!token;
 console.log(isLogged)


//  JWT AUTHENTICATION - to get the currently userData
  
const userAuthentication = async()=>{
 
   try {
    setIsLoading(true)
    const response = await fetch(`${API}/api/user/user`,{
        method:"GET",
        headers:{
            Authorization:  authorizationToken,
        },
    });
    if(response.ok){
        const data = await response.json()
        console.log(data)
        setUser(data.userData)
        setIsLoading(false)
    }else{
        setIsLoading(false)
    }
   } catch (error) {
    console.error("Error fetching user data");
   }
};


const getServices=async()=>{

 try {
        const response = await fetch(`${API}/api/data/service`,{
            method:"GET",
        });
        if(response.ok){
            const data = await response.json();
           
            setServices(data.msg)
        }
    } 
        catch (error) {
        console.log("Failed to fetch services",error)
    }}

useEffect(()=>{
    localStorage.setItem('token',token)
    userAuthentication()
  
},[token])


useEffect(()=>{
   getServices()
},[])

return (
<AuthContext.Provider value= {{storeTokenInLS,API  ,LogoutUser, isLogged,user,services, authorizationToken,isLoading}}>
     {children}
</AuthContext.Provider>
)
}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}