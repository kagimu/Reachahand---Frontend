import React from "react";
import crystal from "../assets/get-your-mix-out.png";
import backdrop from "../assets/Artboard – 6.jpg";
import { posts, socialMedia } from "../constants";
import { motion } from "framer-motion";
import strip from "../assets/strip.png";

const ModalPrograms = ({ isVisible, onClose, staffMember }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl max-w-[60%] w-full">
        <div>
          <button onClick={onClose} className="absolute -ml-[30%] p-5 h5">
            X
          </button>

          <div className="flex justify-end">
            <div className="items-center justify-center mt-10">
              <img
                src={crystal}
                width={200}
                alt="team"
                className="ml-10 mt-[5%] p-5 object-cover"
              />
            </div>
          </div>

          <div className="text-left w-[80%] -mt-20 px-20">
            <h2 className="h5 poppinsSemiBold text-color-darkMaroon">
              Get Your Mix Out # GYMO
            </h2>
            <p className="body-2 poppinsRegular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              id odio ex. Fusce commodo felis sem, et consequat nunc ultricies
              in. Suspendisse potenti. Nunc dictum sagittis est, sit amet
              iaculis ligula egestas suscipit. Pellentesque cursus bibendum
              mauris, eget fringilla tellus rutrum nec. Integer dolor tortor,
              auctor pretium
            </p>
          </div>
          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[10%] mt-10 overflow-x-auto whitespace-nowrap no-scrollbar"
            >
              <div className="flex w-full cursor-pointer ml-20">
                {posts.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mr-[8%] overflow-x-hidden flex justify-center rounded-[10px] items-center"
                  >
                    <img
                      src={item.image}
                      alt="team"
                      width={300}
                      className="h-[200px]"
                    />
                  </div>
                ))}
              </div>
              <img src={strip} className="w-full mt-4 h-[30px]" />
            </motion.div>
          </div>
        </div>
        <img src={strip} className="w-full h-[60px] object-cover" />
      </div>
    </div>
  );
};

export default ModalPrograms;
