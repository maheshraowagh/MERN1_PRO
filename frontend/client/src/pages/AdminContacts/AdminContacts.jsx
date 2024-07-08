import { useEffect, useState } from "react"
import { useAuth } from "../../Store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {

  const[contact,setContact] = useState([]);
  const {authorizationToken} = useAuth();

  const getAllContacts = async() =>{
    try {
      const response = await fetch("http://localhost:8000/api/admin/contacts",{
        method:"GET",
        headers:{
         Authorization: authorizationToken,
        },
      });
      if(response.ok){
        const data = await response.json();
        setContact(data)
      }
      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    getAllContacts();
  },[authorizationToken])

   const deleteUser =async (id)=>{
       try {
        const response = await fetch(`http://localhost:8000/api/admin/contacts/delete/${id}`,{
          method:"DELETE",
          headers:{
            Authorization: authorizationToken,
          }
        })
        console.log(response.status)
           if(response.ok){
            getAllContacts();
             toast.success("Contact Deleted Successfully")
            
           }else{
            console.log("problem")
           }

       } catch (error) {
        console.log(error)
       }
   }

  return (
    <>
    
    <div className="container mx-auto ">
      <h1 className="text-2xl md:text-5xl underline mb-10 font-bold text-center text-gray-800">Admin Contact Data</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text:md md:text-2xl  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 md:px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-2 md:px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-2 md:px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-2 md:px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-2 md:px-6 py-3">
                Delete
              </th>
           
            </tr>
          </thead>
          <tbody>
            {contact.map((cont, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl">
              
                <td className="px-2 md:px-6 py-4">{cont._id}</td>
                <td className="px-2 md:px-6 py-4">{cont.username}</td>
                <td className="px-2 md:px-6 py-4">{cont.email}</td>
                <td className="px-2 md:px-6 py-4">{cont.message}</td>
                <td className="px-2 md:px-6 py-4">
                  
                  <button onClick={()=>deleteUser(cont._id)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </>
  )
}

export default AdminContacts