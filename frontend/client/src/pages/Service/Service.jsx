import { useAuth } from "../../Store/auth";


const Service =  () => {
  const {services} = useAuth();

  const serviceArray = services || []
  return (
    <>
     <div className=" ml-[14vw] pt-5">
          <h1 className="md:text-5xl text-3xl font-bold underline ">SERVICES</h1>
        </div>
      <div className="md:w-[95vw] px-5 md:px-1  md:flex md:flex-wrap md:ml-[8vw] ">
      

        {
         serviceArray.map((data, index) => {
            const { price, description, provider, service,url } = data;

            return (
               
             
              <div className="md:w-[20vw]   cursor-pointer   
              border border-black md:ml-28   mt-10 mb-3 " key={index}>
                <div className=" ">
                  <img
                    className="object-cover w-full h-[22vh]"
                    src={url}
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <div className="flex justify-between mx-5 ">
                    <p className="text-xl">{provider}</p>
                    <p className="font-bold">{price}</p>
                  </div>
                  <div className="my-2 mx-5 mt-4">
                    <h2 className="text-2xl mb-4 font-semibold">{service}</h2>
                    <p className="text-lg">{description}</p>
                  </div>
                </div>
              </div>

            );



          })
        }
      </div>
    </>
  );
};

export default Service;
