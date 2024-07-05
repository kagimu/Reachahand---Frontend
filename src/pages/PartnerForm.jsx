import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import cover from "../assets/Artboard – 7.png";
import backdrop from "../assets/Artboard – 6.jpg";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";

const PartnerForm = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_111d5co", "template_yfjguy9", form.current, {
        publicKey: "G0QioQZDlHVc38IU3",
      })
      .then(
        () => {
          alert("Email sent successfully!");
          setShowPopup(true);
        },
        (error) => {
          alert("Email sending failed: " + error.text);
        }
      );

    // Clear form inputs after submission
    form.current.reset();
  };

  return (
    <div className="w-full">
      <div className="w-full justify-items-center content-center rounded-[30px] mb-20">
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
          <h1 className="text-5xl poppinsSemiBold text-darkBlue leading-normal -mt-[22%] absolute w-full">
            Partnership
          </h1>
          <h3 className="text-2xl -mt-[18%] poppinsRegular font-semibold text-opacity-80 leading-normal w-full text-darkBlue mx-auto absolute">
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
          className="-mt-60"
        >
          <div className="max-w-xl justify-center items-center mx-auto p-10 rounded-lg bg-paleWhite shadow-md relative">
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <h2>Email Sent Successfully!</h2>
                  <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
              </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  for="from_name"
                  className="poppinsSemiBold text-gray-700 text-2xl mb-4"
                >
                  Name of Organisation or individual
                </label>
                <input
                  type="text"
                  className="w-full poppinsRegular text-lg px-3 py-5 border-2 border-gray-500 mt-5 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter name"
                  name="from_name"
                />
              </div>
              <div className="mb-4">
                <label
                  for="from_email"
                  className="poppinsSemiBold text-gray-700 text-2xl mb-4"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full poppinsRegular text-lg px-3 py-5 border-2 border-gray-500 mt-5 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter email"
                  name="from_email"
                />
              </div>
              <div className="mb-4">
                <label
                  for="from_contact"
                  className="poppinsSemiBold text-gray-700 text-2xl mb-4"
                >
                  Your Contact
                </label>
                <input
                  type="text"
                  className="w-full poppinsRegular text-lg px-3 py-5 border-2 border-gray-500 mt-5 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter contact"
                  name="from_contact"
                />
              </div>

              {/* Dropdown field */}
              <div className="mb-4">
                <label
                  id="message"
                  className="poppinsSemiBold text-gray-700 text-2xl mb-4"
                >
                  How do you want to partner with us?
                </label>
                <select
                  className="w-full poppinsRegular text-lg px-3 py-5 border-2 border-gray-500 mt-5 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  name="message"
                >
                  <option value="">Choose to become a</option>
                  <option value="Strategic Partner">Strategic Partner</option>
                  <option value="Implementing Partner">
                    Implementing Partner
                  </option>
                  <option value="Corporate Partner">Corporate Partner</option>
                </select>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                value="Send"
                className="w-[30%] poppinsRegular text-lg bg-black text-white py-4 px-4 mt-5 rounded-[30px] hover:bg-darkBlue focus:outline-none focus:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
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
          <img src={line} alt="line" className="w-full mt-40 relative" />
        </motion.div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Email Sent Successfully!</h2>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="-mt-20 px-20"
      >
        <footer className="grid grid-cols-4 gap-4 bg-darkBlue text-white pl-20 pr-20 rounded-t-[30px]">
          <div className="mt-10">
            <img src={logo} alt="logo" width={200} />
            <p className="poppinsRegular text-md mt-10">
              Reach a hand Uganda is a youth <br />
              centered organisation focusing on <br /> youth empowerment
              programs.
            </p>
            <p className="poppinsSemiBold text-md mt-10">Partners</p>
            <div className="flex items-center gap-5 mt-5">
              {socialMedia.map((item, partnerIndex) => (
                <div
                  className="flex flex-row justify-between"
                  key={partnerIndex}
                >
                  <img src={item.imgUrl} alt="ITEEE" width={40} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            {footerLinks.map((section) => (
              <div>
                <h3 className="poppinsSemiBold text-lg mt-12">
                  {section.title}
                </h3>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-5 poppinsRegular text-md leading-normal mb-6 hover:text-gray-500">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            {ContactLinks.map((section) => (
              <div>
                <h3 className="poppinsSemiBold text-lg mt-12">
                  {section.title}
                </h3>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-5 poppinsRegular text-md leading-normal mb-6 hover:text-gray-500">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex items-center gap-5">
              {socialMedia.map((item) => (
                <div className="flex flex-row justify-between">
                  <img src={item.imgUrl} alt="logo" width={40} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[60px] text-center justify-center ">
            <button className="py-3 px-10 mt-10 border-2 border-white rounded-[25px] justify-end poppinsSemiBold text-white">
              Subscribe Newsletter
            </button>
            <h3 className="poppinsSemiBold mt-10 leading-normal ">
              Peer Educators Academy
            </h3>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default PartnerForm;
