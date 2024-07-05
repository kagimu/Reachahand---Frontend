import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import job from "../assets/job.jpg";
import OpportuntiesCard from "../components/OpportuntiesCard";
import line from "../assets/Artboard – 5.png";
import backdrop from "../assets/Artboard – 6.jpg";
import yellow from "../assets/Artboard – 18.jpg";

const Opportunities = () => {
  const [partners, setPartners] = useState([]);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }
  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch("http://127.0.0.1:8000/api/opportunities"); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with partners data from API response
        setPartners(data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchPartners();
  }, []);

  const convertHTMLToString = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.innerText;
  };

  return (
    <div>
      <div className="content-center text-center w-full">
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25 }}
          src={backdrop}
          alt="backdrop"
          className="w-full relative mt-9"
        />
        <div className="-mt-[40%] mb-10 absolute w-full">
          <NavBar />
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className=" content-center text-center w-full "
        >
          <h1 className="text-7xl poppinsSemiBold text-darkBlue leading-normal -mt-[22%] absolute w-full">
            Opportunities at RAHU
          </h1>
          <h3 className="text-3xl -mt-[16%] poppinsRegular font-semibold text-opacity-80 leading-normal w-full text-darkBlue absolute">
            Each of RAHU's program, campaign and projects is
            <br /> tailored to impact nuggets of information
          </h3>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.25 }}
          className=""
        >
          <img src={line} alt="line" className="w-full -mt-40 relative" />
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.25 }}
        className="grid grid-cols-1 w-[full] px-20 justify-items-center items-center"
      >
        <div className=" flex flex-cols-1 h-[600px] w-full mt-2">
          <div className="text-black border-2 border-gold w-[100%] rounded-[30px] flex justify-items-center">
            <div className="flex justify-items-center w-full h-[700px]">
              <img
                src={job}
                alt="video"
                className="rounded-[30px] object-cover w-full h-[700px]"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className=" text-left justify-items-center mt-[10%] w-full"
      >
        <div className="text-left px-40">
          <h1 className="text-6xl poppinsBold leading-normal text-left">
            Recent Opportunities
          </h1>
        </div>
      </motion.div>

      <div className="text-center justify-center items-center w-full mb-20 px-40">
        <div className="grid grid-cols-1 gap-4 w-full mt-10">
          {partners.map((program) => (
            <OpportuntiesCard
              key={program.title}
              id={program.id}
              title={program.title}
              imgUrl={program.cover_pic_url}
              subtext={convertHTMLToString(program.desc).substring(0, 260)}
              date={program.date}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-cols-2 gap-2 w-[100%] justify-center mb-[8%] rounded-[30px] px-20">
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          src={yellow}
          alt="HOME6"
          className="object-cover w-full relative rounded-[30px]"
        />
        <div className="w-[30%] p-10 absolute -ml-[60%] mt-10">
          <h3 className="poppinsSemiBold text-black text-3xl my-5 ">
            Subscribe for new content
          </h3>
          <h3 className="text-black text-2xl poppinsRegular ">
            RAHU inspires youth by introducing them to diverse role models and
            mentors in fields like medicine, education, theatre and creative
            arts entrepreneurship
          </h3>
        </div>
        {!isEmailValid ? (
          <p className="poppinsSemiBold text-xl text-red-800">
            Please enter a valid email address
          </p>
        ) : null}
        <form
          onSubmit={handleSubmit}
          className="w-[70%] flex flex-1 justify-between p-10 absolute mt-20 ml-10"
        >
          <input
            type="email"
            placeholder="Enter your email address here"
            value={email}
            onChange={handleInput}
            className="bg-gray-300 cursor-text h-[20%] w-[50%] text-center ml-[35%] text-gray-600 text-2xl poppinsRegular px-5 py-4 my-16 rounded-3xl"
          />

          <motion.button
            whileHover={{ scale: "1.0" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            type="submit"
            className="poppinsSemiBold px-10 py-4 h-[30%] bg-black text-white mt-[5%] mb-10 rounded-[30px] text-lg justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2"
          >
            Submit
          </motion.button>
        </form>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Opportunities;
