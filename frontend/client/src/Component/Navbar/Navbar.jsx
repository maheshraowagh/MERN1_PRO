import { NavLink } from "react-router-dom"
import { useAuth } from "../../Store/auth"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const Navbar = () => {
  const {isLogged,user} = useAuth()
  const [mobileNav, setMobileNav] = useState('hidden')
  
  return (
    <>
    <div className="    w-full h-[8vh]  flex justify-between md:px-12 px-1   items-center bg-[#242424] text-white ">


    <div className=" pl-2  md:pl-6  text-2xl">
    <NavLink to="/"> <span className="text-[#F9703F]">MERN</span>TECHNICAL</NavLink>   
    </div>
    


    {
      mobileNav==='hidden'?
      
      <div className="flex text-white  ">

      <ul  className="md:flex text-white    md:gap-8 lg:gap-10 hidden  md:text-md lg:text-xl xl:text-2xl ">
            <NavLink to="/"> <li>Home</li></NavLink>
            {user.isAdmin?"":<NavLink to="/about"><li>About Us</li></NavLink>}
           <NavLink to="/service"><li>Services</li></NavLink>
           <NavLink to="/contact"> <li>Contact</li></NavLink>
           {user.isAdmin?(
          <li>
            <NavLink to='/admin'>
              Admin
            </NavLink>
          </li>
        ):""}
           {isLogged? (
            <li className="px-3 mr-3">
          <NavLink to="/logout">
            Logout
          </NavLink>
          </li>
        ) : (
          <>
          <li>
            <NavLink to="/register">
              Signup
            </NavLink>
            </li>
           
          </>
          
        )}
       
        

      </ul>
      <button onClick={(()=>mobileNav==='hidden'?setMobileNav('block'):setMobileNav('hidden'))}
       className="flex items-center  md:hidden pr-8  text-4xl ">
        <GiHamburgerMenu />
      {console.log(mobileNav)}
        </button>
  </div> :  
  
  <div className="flex md:hidden ">

<ul  onClick={(()=>mobileNav==='hidden'?setMobileNav('block'):setMobileNav('hidden'))}
  className="pt-20 flex flex-col items-center gap-10 absolute top-16 left-0 bg-[#3F1E5F] lg:gap-10 w-full h-full text-4xl text-white ">
      <NavLink to="/"> <li>Home</li></NavLink>
      {user.isAdmin?"":<NavLink to="/about"><li>About Us</li></NavLink>}
     
     <NavLink to="/service"><li>Services</li></NavLink>
     <NavLink to="/contact"> <li>Contact</li></NavLink>
     {user.isAdmin?(
    <li>
      <NavLink to='/admin'>
        Admin
      </NavLink>
    </li>
  ):""}
     {isLogged? (
      <li className="px-3 mr-3">
    <NavLink to="/logout">
      Logout
    </NavLink>
    </li>
  ) : (
    <>
    <li>
      <NavLink to="/register">
        Signup
      </NavLink>
      </li>
     
    </>
    
  )}
 
  

</ul>
<button onClick={(()=>mobileNav==='hidden'?setMobileNav('block'):setMobileNav('hidden'))}
 className="flex items-center ml-[30vw] md:hidden pr-8 z-9   text-4xl ">
  <GiHamburgerMenu />
{console.log(mobileNav)}
  </button>
</div>
    }


    {/* Responsive Nav Bar */}

 

    </div>
    </>
  )
}

export default Navbar