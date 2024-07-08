import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../Store/auth';



const AddAdminService = () => {
  const [service, setService] = useState({
    url:"",
     service:"",
      description:"",
       price:"", 
       provider:""
  });
  const { authorizationToken } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8000/api/admin/createService", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken, 
        },
        body: JSON.stringify(service), // Use the 'service' state
      });
  
      const responseData = await response.json();
      console.log(response);
      console.log(responseData);
  
      if (!response.ok) {
        // Assuming you have a toast function to display errors
        toast.error(responseData.extraDetails || responseData.message);
        return;
      }
  
      if (response.ok) {
        // Handle success, e.g., display a success message, reset form, redirect, etc.
        toast.success("Service added successfully");
        setService({
          url: "",
          service: "",
          description: "",
          price: "",
          provider: "",
        });
        // You might want to redirect or close the form after success
      } else {
        console.error("Failed to add service", responseData);
        toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
      }
    } catch (error) {
      toast.error("Failed to add service");
    }
  };

  useEffect(()=>{

  },[ ])
   


  return (
    <div className="md:w-[50vw]  mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
            URL:
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={service.url}
           onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Service:
          </label>
          <input
            type="text"
            id="service"
            name="service"
            value={service.service}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={service.description}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={service.price}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="provider">
            Provider:
          </label>
          <input
            type="text"
            id="provider"
            name="provider"
            value={service.provider}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="md:flex   items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};


export default AddAdminService;