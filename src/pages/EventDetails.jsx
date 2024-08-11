import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import user from "../assets/icons/Group 53.svg";
import parse from "html-react-parser";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";
import { CgArrowLeftO } from "react-icons/cg";
import { BsShare } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import Footer from "../components/Footer";

const EventDetails = () => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState([]);
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleDislikeClick = () => {
    setDisliked(!disliked);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  useEffect(() => {
    const fetchPartnerDetails = async () => {
      try {
        const response = await fetch(
          `http://rahu.reachahand.org/api/events/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch partner details");
        }
        const data = await response.json();
        // Update state with partner details
        setEventDetails(data);
      } catch (error) {
        console.error("Error fetching partner details:", error);
      }
    };

    fetchPartnerDetails();
  }, [id]);

  const descriptionContent =
    typeof eventDetails.description === "string"
      ? parse(eventDetails.description)
      : JSON.stringify(eventDetails.description);
  return (
    <div>
      <div className="w-full justify-items-center content-center">
        <div className="mt-5 mb-10 w-full">
          <NavBar />
        </div>
        <motion.div
          onClick={handleGoBack}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex gap-4 ml-60 justify-items-start items-left xl:mt-40 cursor-pointer"
        >
          <CgArrowLeftO className="w-[50px] h-[50px] opacity-95" />
          <p className="poppinsRegular text-2xl mt-2">Back</p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 w-full gap-10 px-40 justify-items-center items-center mt-[5%]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-[60%] rounded-[30px] "
          >
            <p className="poppinsSemiBold text-6xl leading-normal text-center">
              {eventDetails.title}
            </p>
            <img
              src={eventDetails.main_image_url}
              alt="LOGO"
              className="w-[100%] h-[600px] object-cover mt-10 rounded-[30px] border-2 border-gray-400"
            />
            <div className="flex justify-between">
              <div className=" bg-white rounded-[30px] gap-2 flex text-center mt-10 p-1">
                <img src={user} alt="user" width={60} className="mt-1" />
                <div className="text-left mt-4">
                  <h3 className="poppinsRegular text-lg leading-5 font-bold">
                    Sarah Anne
                  </h3>
                  <p className="poppinsRegular text-md leading-5 text-gray-700">
                    Peer Educator
                  </p>
                </div>
              </div>
              <motion.div
                onClick={handleGoBack}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex gap-4 ml-60 justify-items-start items-left mt-14 cursor-pointer"
              >
                <p className="poppinsRegular text-xl mt-2 text-gray-600">
                  share
                </p>
                <BsShare className="w-[40px] h-[40px] opacity-75" />
              </motion.div>
            </div>

            <p className="text-left poppinsRegular text-xl leading-normal text-gray-700 mt-10">
              {eventDetails.date}
            </p>
            <p className="text-left poppinsRegular text-2xl leading-normal text-gray-700 mt-5 mb-20">
              {descriptionContent}
            </p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-4 justify-items-start items-left mt-14 cursor-pointer"
            >
              <p className="poppinsRegular text-2xl text-gray-600">Like</p>
              <button
                onClick={handleLikeClick}
                style={{
                  color: liked ? "blue" : "black",
                }}
                className="flex"
              >
                <SlLike className="w-[30px] h-[30px] opacity-75" />
                {likesCount > 0 && (
                  <sup className="text-black text-[15px]">{likesCount}</sup>
                )}
              </button>
              <button
                onClick={handleDislikeClick}
                style={{
                  color: disliked ? "red" : "black",
                }}
              >
                {" "}
                <SlDislike className="w-[30px] h-[30px] opacity-75 mt-1" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 px-20"
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetails;
