/* eslint-disable react/no-unescaped-entities */

import { useNavigate,NavLink  } from "react-router-dom";
import { useState } from "react"
import { useAuth } from "../../Store/auth";
import {toast} from  'react-toastify';
import { LuEye,LuEyeOff } from "react-icons/lu";

const Login= ()=>{
  const [visible,setVisible] = useState(false)
   const [user, setUser] = useState({
      email:"",
      password:""
   });

   const handleInput= (e)=>{
      e.preventDefault();
      let name = e.target.name;
      let value = e.target.value
      setUser({...user,[name]:value})
   }
   const Navigate = useNavigate();
   const {storeTokenInLS,API} = useAuth()
    
   const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(user);
      try {
        const response = await fetch(`${API}/api/user/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const responseData = await response.json();
        storeTokenInLS(responseData.token)
        console.log(responseData);
        if (!response.ok) {
          // If the response is not OK, display the error message in the toast
          toast.error(responseData.extraDetails || responseData.message);
          return; // Exit the function early to prevent further execution
        }
        // Assuming the token is a property of responseData
        if (response.ok) {
         
          // console.log("Login successful");
          toast.success("Login successful");
      
          setUser({
            email: "",
            password: "",
          });
          Navigate("/");
        } else {
          console.error("Login failed", responseData);
            toast.error(responseData.extraDetails?responseData.extraDetails:responseData.message);
        }
      } catch (error) {
        toast.error("Invalid crendentials.");
      }
    };
   
    return(
    <>
    
    <section>
  <main>
     <div className="md:flex   max-w-[100vw]  md:h-[90vh] bg-[#AFC3F6]">
     
     <div className="md:w-[55vw]    flex justify-center items-center ">

      <div className="md:w-[500px]  h-[250px] md:h-[500px] object-cover ml-5">
        <img className="h-full mt-3 " src="login2.png" alt="a boy with laptop " />
      </div>

     </div>

     <div className="md:w-[50vw] p-5  flex justify-start items-center  ">


      <div  className="md:w-[600px] md:h-[550px] w-full rounded-xl px-4 md:px-0  border-black border-2">
      <h1 className="text-4xl md:text-5xl underline font-bold flex justify-center py-5 md:ml-16">Login</h1> 
      <br />
      <form  onSubmit={handleSubmit} className="md:ml-16 md:mt-[5vh]">

        

         <div className="text-2xl py-4 ">

             <label htmlFor="email">email</label> :  
             <input className="md:ml-14  mt-3 md:mt-0 outline-none md:w-[350px] px-4 py-2 rounded-2xl" type="email" name="email" placeholder=" enter your email" required autoComplete="off" value= {user.email} onChange={handleInput}  />
         </div>
        

        <div className=" text-2xl py-4 md:flex   ">
             <label className="md:flex   " htmlFor="password">password</label> :  

             <div className="flex px-2 rounded-xl mt-3 md:mt-0 md:ml-5 md:w-[350px] justify-center items-center bg-white  ">
             <input className="md:ml-2   md:flex-grow border-none text-2xl    outline-none  py-2 " 
             type= { visible? "text":"password"}
             name="password"
              placeholder=" password"
               required 
               autoComplete="off" 
               value= {user.password} onChange={handleInput} />
               <div onClick={()=>setVisible(!visible)} className="cursor-pointer">
                  { visible?<LuEye />: <LuEyeOff/>}
               </div>
               </div>
         </div>

         <br />
         <div  className="text-2xl w-[250px] md:w-[8vw] ml-8 md:ml-[10vw] py-3 md:py-4 rounded-xl border border-black bg-blue-500  hover:bg-blue-600 transition duration-300 flex justify-center md:my-4  color-#DA457D" >
         <button type="submit" >Login</button>
         </div>
         <h1  className="texl-lg md:text-xl mt-[3vh] text-center">Doesn't have a account yet?  <NavLink  to='/register'> <span className="text-blue-700 hover:text-blue-800 cursor-pointer text-xl"  >Signup</span></NavLink></h1>

      </form>
     </div>

     </div>

     </div>

  </main>

    </section>
    </>
    )
}

export default Login