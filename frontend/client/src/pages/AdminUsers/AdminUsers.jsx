import { useEffect, useState } from "react";
import { useAuth } from "../../Store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken,API } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
   
      const data = await response.json();
     
    //   const allData= JSON.stringify(data)
    //   console.log(`users ${allData}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  },[] );

  const deleteUser= async(id)=>{
    try {
        const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if(response.ok){
        getAllUsersData();
        toast.success("User deleted successfully")
      }
      console.log(`users After delete ${data}`);
    } catch (error) {
        console.log(error)
    }
    
  }

  return (
    <div className="container mx-auto ">
      <h1 className=" text-2xl md:text-5xl underline mb-10 font-bold text-center text-gray-800">Admin Users Data</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text:md md:text-2xl  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 md:px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-2 md:px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-2 md:px-6  py-3">
                Mobile
              </th>
              <th scope="col" className="px-2 md:px-6  py-3">
                Update
              </th>
              <th scope="col" className="px-2 md:px-6  py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl">
                <td className="px-2 md:px-6 py-4">{user.name}</td>
                <td className="px-2 md:px-6 py-4">{user.email}</td>
                <td className="px-2 md:px-6 py-4">{user.mobile}</td>
                <td className="px-2 md:px-6 py-4">
                <Link to ={`/admin/users/edit/${user._id}`}>
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                </Link>
                  
                </td>
                <td className="px-2 md:px-6 py-4">
                  
                  <button onClick={()=>deleteUser(user._id)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;