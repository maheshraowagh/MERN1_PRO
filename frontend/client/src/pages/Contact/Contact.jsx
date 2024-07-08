import { useState} from "react";
import { useAuth } from "../../Store/auth";
import {toast} from  'react-toastify';

const Contact = () => {
  const [contact, setContact] = useState({
   
    username: "",
    email: "",
    message: "",
  });
  // console.log(contact)
  const [userData, setUserData] = useState(true)
  const {user,API} = useAuth();

  
  
    if(userData && user){
      setContact({
         username:user.name,
        email:user.email,
        message:""
      },[contact])
  
      setUserData(false);
    }


  

  const handleChange = (e) => {
    
    let name = e.target.name;
    let value = e.target.value;
    setContact({ ...contact,[name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(contact)
    try {
      const response= await fetch(`${API}/api/form/contact`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log(response);
      
      // const responseData = await response.json();
      // console.log(responseData);
      if(response.ok){
        console.log("message sent successful");
        toast.success("message sent successful");
      setContact({
        ...contact,
      message: "",
      });
    }else{
      toast.error("Message does not sent")
    }
    } catch (error) {
      console.log(`error${'this is the error'}`)
      toast.error("Message doesnot sent")
    }

  }

  return (
    <>
      <div className="">
        <div className=" ml-[14vw]  pt-5">
          <h1 className="text-3xl md:text-5xl font-bold underline ">Contact Us</h1>
        </div>

        <div>
          <div className="w-full   md:flex justify-center items-center text-black   ">
            <div className="md:w-[40vw] mt-2   md:mt-[6vh] px-12 md:px-0">
              <img
                className=" md:w-[30vw] mx-auto rounded-sm"
                src="contact1.jpg "
                alt="a boy who wears an vr headset"
              />
            </div>

            <div className="w-[85vw] ml-6  border-2 md:border-none  md:w-[30vw] pl-6 md:pr-0 pr-6  md:h-[55vh] text-black mt-[4vh]">
              <form onSubmit={handleSubmit} className="mt-[3vh]">
                <div>
                  <label className="text-xl md:text-lg font-semibold" htmlFor="">
                    username
                  </label>
                  <br />
                  <input
                    className="bg-[#60A7FF] outline-none border-none w-full px-3 mt-2 py-3 md:py-4   md:w-[25vw] mb-4"
                    type="text"
                    name="username"
                    autoComplete="off"
                    required
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="text-xl md:text-lg font-semibold" htmlFor="">
                    email
                  </label>{" "}
                  <br />
                  <input
                    className="bg-[#60A7FF] outline-none border-none  px-3 w-full  md:w-[25vw]  mt-5 py-3 md:py-4 mb-4"
                    type="text"
                    autoComplete="off"
                    required
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className=" text-xl md:text-lg font-semibold" htmlFor="">
                    message
                  </label>{" "}
                  <br />
                  <textarea
                    
                    className="outline-none w-full px-3  md:w-[25vw]  mb-5 bg-[#60A7FF] mt-3  border-none  pt-3 resize-none"
                     required
                     autoComplete="off"
                    rows='3'
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                  > </textarea>
                 
                </div>

                <div className="md:w-[9vw]  flex justify-center md:ml-[7vw] py-2 px-9 text-xl rounded-md border-black  bg-[#3375c6] text-white hover:bg-[#223A7A]  transition duration-300">
                  <a href="/service">
                    <button  type="submit" className="ml-1 text-2xl">
                      submit
                    </button>
                  </a>
                </div>
              </form>

              <div className="flex gap-10 ml-[5vw] mt-[5vh]"></div>
            </div>
          </div>
        </div>

        <section className=" h-[16vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.93215615622!2d77.42329471402589!3d23.234605431907084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4269deb07df9%3A0xfee61a854a2e5374!2sMaharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1716979812690!5m2!1sen!2sin"
           
           style={{width:"100vw",
           height:"",
           style:"border:0;",
           allowfullscreen:"",
           loading:"lazy"}} 
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default Contact;
