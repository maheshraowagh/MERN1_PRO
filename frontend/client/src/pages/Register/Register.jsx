import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../Store/auth";
import {toast} from  'react-toastify';
import { LuEye,LuEyeOff } from "react-icons/lu";

const Register = () => {
  const [visible,setVisible] = useState(true)
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();

  const {storeTokenInLS,API} = useAuth()

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${API}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        
      });
        
      const responseData = await response.json();
      console.log(response)
       console.log(responseData);
      if (!response.ok) {
      toast.error(responseData.extraDetails || responseData.message);
        return; 
      }
   
      if (response.ok) {
        storeTokenInLS(responseData.token);
        console.log("Registration successful");
        toast.success("Registration successful");
        setUser({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
        navigate('/')
      } else {
        console.error("Registration failed", responseData);
        toast.error(responseData.extraDetails?responseData.extraDetails:responseData.message);
      }
    } catch (error) {
      toast.error("Invalid crendentials")
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="md:flex max-w-[100vw] md:h-[90vh] bg-[#AFC3F6]">
            <div className="md:w-[55vw] flex justify-center items-center">
              <div className="md:w-[600px] h-[250px] md:h-[600px] bg-blue-500 object-cover ml-5">
                <img
                  className="h-full"
                  src="registers.jpg"
                  alt="a boy with laptop "
                />
              </div>
            </div>
            <div className="md:w-[50vw] p-5 flex justify-start items-center">
              <div className="w-full  md:w-[620px] md:h-[650px] shadow-xl md:pt-[5vh] md:pr-[2vw] rounded-xl border-black border-2">
                <h1 className="text-2xl md:text-5xl font-bold md:flex justify-center py-5 ml-5 md:ml-16 underline">
                  Registration Form
                </h1>
                <br />
                
                <form onSubmit={handleSubmit} className=" md:ml-16">
                  <div className="text-2xl md:py-4 ml-5 md:ml-1 ">
                    <label  htmlFor="username">Name :</label>
                    <input
                      className="  md:ml-11 px-4 mt-2 md:mt-0 md:px-4 py-2 rounded-2xl border-none outline-none w-full md:w-[385px]"
                      type="text"
                      name="name"
                      placeholder=" name"
                      required
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="text-2xl py-4 ml-5 md:ml-1">
                    <label htmlFor="email">email</label> :
                    <input
                      className="md:ml-12  w-full md:w-[385px] mt-2 md:mt-0 px-4 py-2 rounded-2xl border-none outline-none"
                      type="email"
                      name="email"
                      placeholder=" enter your email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="text-2xl py-4  ml-5 md:ml-1">
                    <label htmlFor="mobile">mobile</label> :
                    <input
                      className="md:ml-9  w-full md:w-[385px] px-4 md:px-6 mt-2 md:mt-0 py-2 rounded-2xl border-none outline-none"
                      type="text"
                      name="mobile"
                      placeholder="mobile number"
                      required
                      autoComplete="off"
                      value={user.mobile}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="text-2xl py-4 md:flex mr-4 md:mr-0  ml-5 md:ml-1">
                    <label htmlFor="password">password</label> :
                    <div className="flex justify-center items-center bg-white rounded-xl  w-full md:w-[385px] px-4 md:px-6 md:ml-4">
                    <input
                      className=" w-full py-2 rounded-2xl border-none outline-none "
                      type=  { visible? "text":"password"}
                      name="password"
                      placeholder=" password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                    <div onClick={()=>setVisible(!visible)} className="cursor-pointer ml-2">
                    { visible?<LuEye />: <LuEyeOff/>}
                 </div>

                    </div>
                  </div>
                  <br />
                  <div className=" md:w-[480px] w-[250px] ml-12 md:ml-0 text-2xl py-3 md:py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition duration-300 flex justify-center md:my-4 color-#DA457D">
                    <button type="submit">Register Now</button>
                  </div>
                </form>
                <h1 className="text-lg md:text-xl mt-[3vh] text-center">Already have an account ? <NavLink  to='/login'> <span className="text-blue-700 hover:text-blue-800 cursor-pointer text-xl"  >Login</span></NavLink></h1>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
