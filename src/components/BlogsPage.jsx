import React, { useEffect, useState } from "react";
import user from "../assets/icons/Group 53.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogsPage = () => {
  let navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchBlogs = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch("http://rahu.reachahand.org/api/posts"); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const removeHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  return (
    <div>
      {" "}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="xl:grid xl:grid-cols-3 gap-10 justify-center items-center w-full px-20 xl:px-40"
      >
        {blogs.map((item, index) => (
          <div
            className="h-[300px] xl:h-[450px] w-full mt-20 mb-40"
            key={index}
          >
            <div className="">
              <img
                src={item.cover_pic_url}
                alt="post"
                width={600}
                onClick={() => navigate(`/BlogDetails/${item.id}`)}
                className="rounded-[30px] h-[300px] xl:h-[450px] object-cover border-2 border-gray-500"
              />
              <div className=" bg-white rounded-[30px] gap-2 flex text-center absolute -mt-[12%] xl:-mt-[5%] ml-4 p-1">
                <img src={user} alt="user" width={40} className="mt-1" />
                <div className="text-left mt-2 ">
                  <h3 className="poppinsRegular text-lg leading-5 font-bold mr-2">
                    {item.owner}
                  </h3>
                  <p className="poppinsRegular text-md leading-5 text-gray-700">
                    Peer Educator
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="poppinsSemiBold text-left xl:leading-normal h5 xl:h4 py-4">
                {item.title && item.title.substring(0, 28)}..
              </h2>

              {/* Display the first 50 characters of the description as plain text */}
              <h3 className="poppinsRegular text-gray-600 text-left xl:leading-normal body-1">
                {removeHtmlTags(item.desc.substring(0, 100))}
                ...
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogsPage;
