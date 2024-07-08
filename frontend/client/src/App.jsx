import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Service from "./pages/Service/Service"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Navbar from "./Component/Navbar/Navbar"
import Error from "./pages/Error/Error"
import Footer from "./Component/Footer/Footer"
import Logout from "./pages/Logout/Logout"
import AdminLayout from "./Component/Layout/adminLayout"
import AdminContacts from "./pages/AdminContacts/AdminContacts"
import AdminUsers from "./pages/AdminUsers/AdminUsers"
import UpdateUser from "./pages/UpdateUser"
import Hero from "./pages/AdminHero/Hero"
import AdminService from "./pages/AdminService/AdminService"
import AddAdminService from "./pages/AdminService/AddAdminService"



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
     
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/service" element={<Service/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/logout" element={<Logout/>}/>
     <Route path="*" element={<Error/>} />

     <Route path="/admin" element={<AdminLayout/>}>
     <Route index element={<Hero/> } />
        <Route path="users" element={<AdminUsers/>}/>
        <Route path="users/edit/:userId" element={<UpdateUser />} />
        <Route path="contacts" element={<AdminContacts/>}/>
        <Route path="services" element={<AdminService/>}/>
        <Route path="AddService" element={<AddAdminService/>}/>
    
     </Route>

     </Routes>
    
    <Footer/>
    
    </BrowserRouter>
    
    </>
  )
}

export default App