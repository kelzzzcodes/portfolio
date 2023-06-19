
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

const projects=({ projectdata })=> {
  return (
    <div className="w-full flex flex-col bg-gray-100 " id="projects-section">
      <div className="mt-8 px-8 md:px-20 md:py-24">
     
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projectdata.map((item) => (
            <SwiperSlide>
              <div
                key={item.id}
                className=" flex pb-9 flex-col justify-between text-center  h-[470px] overflow-hidden my-3 mx-1 bg-white border-t-8 border-gray-500 divbox-shadow"
              >
                <div
                  className=" flex w-full h-[250px]   bg-cover    bg-top-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></div>

                <p className="text-[#ee5c5d] px-8">{item.year}</p>
                <p className=" text-lg font-semibold hover:underline px-8">
                 
                  {item.title}
                </p>
                <p className="px-8">{item.description}</p>
                <Link
                  to={item.websiteLink}
                  target="_blank"
                  className="bg-[#252525] rounded-md p-2 mx-10 items-center flex align-center justify-center text-white text-sm outline outline-1 outline-gray-700 outline-offset-0 hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-500"
                >
                
                  Live Demo
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default projects
