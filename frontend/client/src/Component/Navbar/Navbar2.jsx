import { NavLink } from "react-router-dom"
import { useAuth } from "../../Store/auth"

const Navbar = () => {
  const {isLogged,user} = useAuth()
  
  return (
    <>
    <div className="  w-[100vw] h-[8vh] text-2xl flex justify-between   items-center bg-[#242424] text-white ">


    <div className="mx-auto pl-8">
    <NavLink to="/"> <span className="text-[#F9703F]">MERN</span>TECHNICAL</NavLink>   
    </div>
    

    <div className="flex mx-auto">

        <ul  className="flex gap-10  ">
              <NavLink to="/"> <li>Home</li></NavLink>
             <NavLink to="/about"><li>About Us</li></NavLink>
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
              <li>
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
    </div>

    </div>
    </>
  )
}

export default Navbar