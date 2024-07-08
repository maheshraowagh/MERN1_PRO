import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const params = useParams();
//   console.log(params.userId)
 
  const { authorizationToken,API } = useAuth();

  useEffect(() => {
    const getSingleUserData = async () => {
      try {
        const response = await fetch(
          `${API}/api/admin/users/${params.userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken, 
            },
          }
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const userData = await response.json();
        console.log(userData)
        setData(userData);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleUserData();
  }, [params, authorizationToken]); 

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/users/edit/${params.userId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorizationToken, 
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json(); 
      console.log(responseData)
      if (response.ok) {
        toast.success("User updated successfully");
      } else {
        toast.error("User not updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">UPDATE USER</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile:
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={data.mobile}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;