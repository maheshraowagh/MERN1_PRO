import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { IoFileTrayFullSharp,IoHomeSharp } from "react-icons/io5";
import { useAuth } from "../../Store/auth";


const AdminLayout = () => {

  const {user, isLoading} = useAuth()
  
if(isLoading){
  return <h1>Loading...</h1>
}
  if(!user.isAdmin){
    return <Navigate to='/'/>
  }
  return (
    <div className="md:flex ">
      {/* Admin Sidebar */}
      <div className="md:w-[14vw] bg-gray-800 h-[8vh] md:h-[45vw]  ">
        <nav className="text-white ">
          <ul className="md:pt-8 flex md:flex-col md:h-[40vw] justify-center md:gap-5 px-3">
            <li>
              <NavLink to="/admin/users" className=" px-4 py-2 flex items-center gap-1 md:gap-2 text-sm md:text-xl font-medium text-white hover:bg-gray-700">
              <FaUser /> Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/contacts" className="  flex items-center gap-1 md:gap-2 px-4 py-2 text-sm md:text-xl font-medium text-white hover:bg-gray-700">
              <IoIosContact /> Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/services" className=" px-4 py-2 text-md md:text-xl flex items-center gap-1 md:gap-2 font-medium text-white hover:bg-gray-700">
              <IoFileTrayFullSharp /> Services
              </NavLink>
            </li>

            <li>
             
        
         <NavLink to={`/admin/AddService`}>
          <button className=" px-4 py-2 text-sm md:text-xl flex items-center gap-1 md:gap-2 font-medium text-white hover:bg-gray-700"><IoFileTrayFullSharp /> Add SERVICES</button>
         </NavLink>
        
            
            </li>

            <li>
              <a href="/" className=" px-4 py-2 text-sm md:text-xl hidden md:flex items-center gap-1 md:gap-2 font-medium text-white hover:bg-gray-700">
              <IoHomeSharp /> Home
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
     
      <div className="hero ">
      
    </div>
        <Outlet />
     
    </div>
  );
};

export default AdminLayout;