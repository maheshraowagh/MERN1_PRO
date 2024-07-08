import { NavLink } from "react-router-dom";
import { useAuth } from "../../Store/auth";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  const {user} = useAuth();

  return (
    <>
      <main className=" w-[100vw]  text-black">
        <div>
          <div className="w-full   md:flex justify-center items-center text-black  pt-[4vw]">
            <div className="md:w-[40vw]   mt-[4vh]">
              <p className="ml-[5vw] text-lg">
               <span className="font-semibold" >Welcome, Mern Technical</span>
              </p>
              <br />
              <h1 className="ml-[5vw] text-3xl font-bold  md:w-[25vw]">
                <p> Welcome ,{user? <span className="text-[#F9703F]">{user.name}</span> :`to our website`}</p>
                
              </h1>

              <h1 className="ml-[5vw] text-2xl md:text-5xl md:font-bold mt-4 md:mt-1 md:w-[25vw]">
               
                Why Choose Us?
              </h1>
              <br />

              <p className="ml-[5vw] md:w-[26vw] text-lg">
               <span className=" font-bold md:font-semibold">Expertise</span> : Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
              </p>
                  <br />
              <p className="ml-[5vw] md:w-[26vw] text-lg">
               <span className="font-bold md:font-semibold">Customization</span> : We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals
              </p>
              <br />
              <p className="ml-[5vw] md:w-[26vw] text-lg">
               <span className="font-bold md:font-semibold">Customer-Centric Approach</span>: We priotize your satisfaction and provide top-notch support to address your IT Concerns.
              </p>
              <br />
              <p className="ml-[5vw] md:w-[26vw] text-lg">
               <span className="font-bold md:font-semibold">Affordability</span> : We offer competitive pricing without compromising on the quality of our sevices.
              </p>
              <br />
              <p className="ml-[5vw] md:w-[26vw] text-lg">
               <span className="font-bold md:font-semibold">Reliablity</span>: Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.
              </p>
              <div className="flex justify-center md:justify-normal gap-10 ml-[5vw] mt-[5vh]">
                <div className="md:w-[9vw] py-2 px-3 md:px-6 text-xl rounded-md border-black  bg-[#F9703F] hover:bg-blue-600 transition duration-300">
                  <a href="/contact">
                    <button>Connect Now</button>
                  </a>
                </div>

                <div className="md:w-[9vw] py-2 px-5 md:px-9 text-xl rounded-md border-black  bg-[#F9703F]  hover:bg-blue-600 transition duration-300">
                  <a href="/service">
                    <button>Learn More</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-[40vw]   mt-10 md:mt-[1vh]">
              <img
                className="md:w-[30vw]  px-10 md:px-1 mx-auto rounded-sm"
                src="about2.jpg "
                alt="a boy who wears an vr headset" />
            </div>
          </div>

          {/* Middle section */}

          <div className="bg-[#F9703F] mt-10 flex gap-3 md:gap-10  items-center mx-2  md:px-[6vw] md:w-[70vw]  md:mx-auto text-black rounded">
            <div className="  border-r-2 border-r-black md:pr-10 md:w-[14vw] ">
              <h1 className="md:text-4xl font-bold flex justify-center">50+</h1>
              <p className="md:text-xl" >company Registers </p>
            </div>

            <div className=" md:w-[14vw] border-r-2 border-r-black px-4 md:px-10">
              <h1 className="md:text-4xl font-bold flex justify-center">
                250+
              </h1>
              <p className="md:text-xl md:pl-5">Happy clients</p>
            </div>

            <div className="border-r-2 md:w-[14vw] border-r-black px-3 md:px-14">
              <h1 className="md:text-4xl font-bold flex justify-center">150+</h1>
              <p className="md:text-xl md:pl-9">Project completed</p>
            </div>

            <div className=" md:pl-16 md:w-[14vw]">
              <h1 className="md:text-4xl font-bold flex justify-center">650k</h1>
              <p className="md:text-xl">Youtube subscribers</p>
            </div>
          </div>


          {/* End section */}

          <div className="w-full  mt-10  md:flex justify-center items-center bg-[#103544] pt-[4vw]  ">
            <div className="md:w-[40vw]   md:mt-[4vh]">
              <img
                className=" md:w-[30vw] px-7 md:px-1  mx-auto rounded-sm"
                src="about1.jpg "
                alt="a boy who wears an vr headset" />
            </div>

            <div className="md:w-[40vw]   text-white mt-[4vh]">
              <p className="ml-[5vw] text-lg">We are here to help you</p> <br />
              <h1 className="ml-[5vw] text-2xl md:text-5xl font-bold md:w-[25vw]">
                Get Started Today
              </h1>{" "}
              <br />
              <p className="ml-[5vw] md:w-[26vw] text-lg">
                Ready to take the first step towards a more efficent and secure
                IT infrastructure? Contact us today for a free consultation and
                lets discuss how Mern Technical can help your business thrive
                in the digital age.
              </p>
              <div className="flex justify-center md:justify-normal gap-10 ml-[5vw] py-3 mt-[4vh]">
                <div className="md:w-[9vw] py-2 px-3 md:px-6 text-xl rounded-md border-black  bg-[#F9703F] hover:bg-blue-600 transition duration-300">
                  <a href="/contact">
                    <button>Connect Now</button>
                  </a>
                </div>

                <div className="md:w-[9vw] py-2 px-5 md:px-9 text-xl rounded-md border-black  bg-[#F9703F]  hover:bg-blue-600 transition duration-300">
                  <a href="/service">
                    <button>Learn More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
