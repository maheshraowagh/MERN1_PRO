const Home = () => {
  return (
    <>
      <main className="bg-[#3F1E5F] w-full ">
        <div>
          <div className="w-full   md:flex justify-center items-center bg-[#3F1E5F] pt-[4vw]">
            <div className="  w-full md:w-[40vw]   text-white mt-[4vh]">
              <p className="md:ml-[5vw] ml-6 md:text-left md:text-lg">
                We are the World Best IT Company
              </p>{" "}
              <br />
              <h1 className="ml-[5vw] text-3xl  md:text-5xl font-bold md:w-[25vw]">
                Welcome to Mern Technical
              </h1>{" "}
              <br />
              <p className="md:ml-[5vw] md:w-[26vw] w-full sm:text-xl px-5 md:px-1 md:text-lg">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no futher! At Mern Technical, we
                specialize in providing innovative IT Services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="flex gap-10 ml-[5vw] mt-[5vh]">
                <div className="md:w-[9vw] py-2 px-3  md:px-6 text-xl rounded-md border-black  bg-[#010761] hover:bg-blue-600 transition duration-300">
                  <a href="/contact">
                    <button>Connect Now</button>
                  </a>
                </div>

                <div className="md:w-[9vw] py-2 px-6 md:px-9 text-xl rounded-md border-black  bg-[#010761]  hover:bg-blue-600 transition duration-300">
                  <a href="/service">
                    <button>Learn More</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-[40vw] mt-10 px-4 md:px-0  md:mt-[4vh]">
              <img
                className="md:w-[30vw] mx-auto rounded-sm"
                src="home1.jpg "
                alt="a boy who wears an vr headset"
              />
            </div>
          </div>

          {/* Middle section */}

          <div className="bg-white flex gap-3 md:gap-10  items-center px-6 md:px-[6vw]  md:w-[70vw] mt-10 md:mt-40 mx-2  md:mx-auto text-black rounded-xl">


            <div className="  border-r-2 border-r-black pr-10 w-20  md:w-[14vw] ">
              <h1 className="text-lg md:text-4xl font-bold flex  md:justify-center">50+</h1>
              <p className="  text-sm md:text-xl">Registered companies</p>
            </div>

            <div className=" md:w-[14vw] border-r-2 border-r-black  md:px-10">
              <h1 className="text-lg md:text-4xl font-bold flex justify-center mr-4 md:mr-0">
                100,00+
              </h1>
              <p className="md:text-xl pl-2 md:pl-5">Happy clients</p>
            </div>

            <div className="border-r-2   md:w-[14vw] border-r-black px-1  md:px-14">
              <h1 className=" text-lg md:text-4xl font-bold flex justify-center">24/7</h1>
              <p className=" md:text-xl md:pl-9">services 24/7</p>
            </div>

            <div className=" md:pl-16 md:w-[14vw]">
              <h1 className=" text-lg md:text-4xl font-bold flex justify-center">500+</h1>
              <p className="md:text-xl">we know Developers</p>
            </div>
          </div>


          {/* End section */}

          <div className="w-full h-full mt-10  md:flex justify-center items-center bg-[#3F1E5F] pt-[4vw]  ">
            <div className=" w-full md:w-[40vw]  md:h-[55vh] md:mt-[4vh]">
              <img
                className="md:w-[30vw] mx-auto rounded-sm px-4 md:px-0 "
                src="end2.jpg "
                alt="a boy who wears an vr headset"
              />
            </div>

            <div className=" w-full md:w-[40vw]   text-white mt-[4vh]">
              <p className="ml-[5vw] text-xl md:text-lg">We are here to help you</p> <br />
              <h1 className="ml-[5vw] text-4xl md:text-5xl font-bold md:w-[25vw]">
                Get Started Today
              </h1>{" "}
              <br />
              <p className="ml-[5vw] md:w-[26vw] md:text-lg px-2">
                Ready to take the first step towards a more efficent , secure
                IT infrastructure? Contact us today for a free consultation and
                lets discuss how Mern Technical can help your business thrive
                in the digital age.
              </p>
              <div className="flex justify-center md:justify-normal gap-10 ml-[5vw] mt-[5vh] py-6 md:py-1">
                <div className=" py-2 px-4 md:px-6 text-xl rounded-md border-black  bg-[#010761] hover:bg-blue-600 transition duration-300">
                  <a href="/contact">
                    <button>Connect Now</button>
                  </a>
                </div>

                <div className="  py-2 px-5 md:px-9 text-xl  rounded-md border-black  bg-[#010761]  hover:bg-blue-600 transition duration-300">
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

export default Home;
