import React from 'react'
import { motion } from "framer-motion";

const ServiceCard = ({ bgImage, tagImage, title, content, btnName }) => {
  return (
    <div>
      <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-blue-700 rounded-[30px]"
              style={{
                    backgroundImage: `url(${bgImage}) !important`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%'
                }}
            >
                {/* <img
                  src={bgImage}
                  className="absolute rounded-[30px]"
                /> */}
                <div className="relative px-[10%]">
                    <div className='flex justify-center p-5 items-center'>
                        <img
                            src={tagImage}
                            className="object-cover rounded-full w-[200px] h-[200px]"
                        />
                    </div>
                  <h2 className="poppinsSemiBold text-white h4 mb-4">
                    {title}
                  </h2>
                  <p className="poppinsSemiBold text-white body-1">
                    {content}
                  </p>
                  <div className='text-center'>
                    <button className="poppinsSemiBold p-4 px-[20%] m-5 bg-color-darkBlue text-white rounded-[30px]">
                        {btnName}
                    </button>
                  </div>
                </div>
            </motion.div>
    </div>
  )
}

export default ServiceCard
