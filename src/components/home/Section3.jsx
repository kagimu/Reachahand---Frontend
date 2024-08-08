import React from 'react'
import home5 from "../../assets/Web 1920 – 25.jpg";
import happening from "../../assets/happening-1.jpg";
import arrow from "../../assets/icons/featherIcons/arrow-up-right.svg";
import { motion } from "framer-motion";
import round from "../../assets/round.png";

const Section3 = () => {
  return (
    <div>
      <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
            }}
            className="my-[10%] bg-[#f2f2f2] p-5 rounded-[30px]"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h1 text-left text-black poppinsBold p-6"
            >
              What's happening at RAHU
            </motion.h1>
            <div className="grid grid-cols-1 gap-4 laptop-sm:grid lg:grid-cols-3 md:grid-cols-2">
              <div className="rounded-[30px] grid grid-rows-2 gap-4">
                <div className="relative flex flex-1 rounded-[30px]"
                    style={{
                    backgroundImage: `url(${happening})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                  <button className="absolute bottom-3 left-4 text-white backdrop-blur-md poppinsRegular text-md px-6 py-2 rounded-[30px]">
                    Events
                  </button>
                </div>
                <div>
                  <p className="poppinsRegular text-black py-4 hover:text-color-gold cursor-pointer">
                    A peer educator affiliated with Nyaruhandagazi Health III
                    Centre...
                  </p>
                  <div className="flex justify-between pb-[10%] items-center">
                    <p className="poppinsRegular hover:text-white cursor-pointer hover:text-gray-300 underline">
                      Read more
                    </p>
                    <span>
                      <img src={arrow} alt="user" width={40} height={40} className="bg-white rounded-full hover:border cursor-pointer"/>
                    </span>
                  </div>
                </div>

              </div>
              <div className="rounded-[30px] py-4"
                    style={{
                    backgroundImage: `url(${home5})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                  <div className='flex justify-center mb-4'>
                    <button className="flex items-center py-2 px-4 bg-white border-white rounded-[30px] text-gray-700 hover:border-green-500 hover:border">
                      <div className="w-12 h-12 rounded-full">
                        <img src={round} alt="face" width={'100%'} height={'100%'} className="object-contain" />
                      </div>
                      <div className='ml-2 '>
                        <div className="poppinsRegular">
                          Peer educator
                        </div>
                        <div className="poppinsSemiBold">
                          Benson Muhindo
                        </div>
                      </div>
                    </button>
                  </div>

                  <h2 className="poppinsSemiBold lg:text-3xl px-[10%] hover:text-white cursor-pointer">
                    What I Did Next...
                  </h2>
                  <h3 className="poppinsRegular px-[10%] py-[5%] lg:text-2xl hover:text-white cursor-pointer">
                    A peer educator affiliated with Nyaruhandagazi Health III
                    Centre...
                  </h3>
                  <p className="poppinsRegular px-[10%] text-black underline hover:text-white cursor-pointer">
                    Read more
                  </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#658dc0] rounded-[30px] py-1">
                  <div className='flex justify-center my-4'>
                    <button className="flex items-center py-2 px-4 bg-white border-white rounded-[30px] text-gray-700 hover:border-green-500 hover:border">
                      <div className="w-12 h-12 rounded-full">
                        <img src={round} alt="face" width={'100%'} height={'100%'} className="object-contain" />
                      </div>
                      <div className='ml-2 '>
                        <div className="poppinsRegular">
                          Peer educator
                        </div>
                        <div className="poppinsSemiBold">
                          Benson Muhindo
                        </div>
                      </div>
                    </button>
                  </div>

                  <h2 className="poppinsSemiBold px-[10%] text-white hover:text-color-green cursor-pointer">
                    Reflecting on 35
                  </h2>
                  <h3 className="poppinsRegular px-[10%] py-[5%] text-white hover:text-color-green cursor-pointer">
                    A peer educator affiliated with Nyaruhandagazi Health III
                    Centre...
                  </h3>
                  <div className="flex justify-between px-[10%] pb-[10%] items-center">
                    <p className="poppinsRegular hover:text-white cursor-pointer hover:text-gray-300 underline">
                      Read more
                    </p>
                    <span>
                      <img src={arrow} alt="user" width={40} height={40} className="bg-white rounded-full hover:border cursor-pointer"/>
                    </span>
                  </div>
                </div>
                <div className="bg-color-green rounded-[30px] py-1">
                  <button className="bg-white m-5 ml-10 rounded-[30px] gap-4 px-4 py-2 poppinsRegular text-n-7 flex  hover:text-color-darkMaroon hover:border-darkMaroon hover:border-2  cursor-pointer">
                    Blogs
                  </button>
                  <p className="flex justify-between px-[10%] pb-[10%] items-center poppinsRegular hover:text-white cursor-pointer">
                    {" "}
                    Before joining peer education
                    <span className=''>
                      <img src={arrow} alt="user" width={40} height={40} className="bg-white rounded-full hover:border" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
    </div>
  )
}

export default Section3
