import React from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import your actual images
import img1 from "../assets/Avanti-red.jpg"
import img2 from "../assets/Avanti-blue-1.jpg"
import img3 from "../assets/Avanti-black.jpg"
import img4 from "../assets/rigg-gold.png";
import img5 from "../assets/rigg-patrol.png"; // Replace with your actual paths
import img6 from "../assets/rigg-voyage-2.png";
import img7 from "../assets/body-mist-coconut.jpg"
import img8 from "../assets/body-mist-pink.jpg"
import img9 from "../assets/vanilla.jpg"

function FeaturedProduct(){
  return (
    <div>
        <h2 className="text-center text-xl md:text-4xl font-[600] my-[20px]">Our Signature Collections</h2>
        <div className="w-full max-w-3xl mx-auto py-8 px-4 overflow-visible">
            <Swiper
                // Install modules
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect={'fade'} // Makes the transition look luxury/smooth
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true} // Add this!
                watchSlidesProgress={true}
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                dynamicBullets: true,
                }}
                className="rounded-xl shadow-lg h-[350px]  bg-white w-full p-2"
            >
                <SwiperSlide className="flex items-center justify-center">
                <img src={img1} alt="Avanti Red"   className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>
                
                <SwiperSlide className="flex items-center justify-center">
                <img src={img4} alt="Riggs Gold"  className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center">
                <img src={img7} alt="Body-mist Coconut"  className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                <img src={img8} alt="Body-mist Pink"  className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                <img src={img5} alt="Riggs Patrol"  className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                <img src={img2} alt="Avanti Blue"  className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                <img src={img6} alt="Rigg Voyage"  className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                <img src={img3} alt="Avanti Black"  className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                <img src={img9} alt="Body-mist Vanilla"  className="h-[90%] w-auto m-[auto] py-4 object-contain"/>
                </SwiperSlide>
            </Swiper>

            {/* CUSTOM CSS TO MAKE DOTS PINK */}
        <style jsx global>{`
            /* Fix the double image */
            .swiper-slide {
                opacity: 0 !important;
                transition: opacity 0.5s ease-in-out;
            }
            .swiper-slide-active {
                opacity: 1 !important;
            }

        `}</style>

    </div>
    </div>
  );
};

export default FeaturedProduct;