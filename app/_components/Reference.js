// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Corrected imports

// // Import Swiper styles
// import "swiper/css"; // Core Swiper styles
// import "swiper/css/navigation"; // Navigation module styles
// import "swiper/css/pagination"; // Pagination module styles
// import "swiper/css/scrollbar"; // Scrollbar module styles

// import Image from "next/image";

// const Reference = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       <SwiperSlide>
//         <Image
//           fill
//           src="https://interlink.mr/img/bg-img/am.jpg"
//           alt="Slide 1"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <Image
//           fill
//           src="https://interlink.mr/img/bg-img/am.jpg"
//           alt="Slide 2"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <Image
//           fill
//           src="https://interlink.mr/img/bg-img/am.jpg"
//           alt="Slide 3"
//         />
//       </SwiperSlide>
//       {/* Add more slides as needed */}
//     </Swiper>
//   );
// };

// export default Reference;
function Reference() {
  return (
    <div id="clients" className="py-16 bg-accent">
      <div className="container">
        <div className="text-center">
          <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
            Références
          </h1>
          <div className="flex mb-3 justify-center">
            <div className="w-16 h-1 rounded-full bg-accent-hover inline-flex"></div>
          </div>
        </div>
        {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      // spaceBetween={50}
      slidesPerView={6}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      parallax={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
    >
      <div className="flex flex-wrap justify-center items-center">
        {referencesData.length > 0 ? (
          referencesData.map((reference) => {
            const attributes = reference.attributes || {};
            const logoUrl = attributes.logo?.data?.attributes?.url || "";

            return (
              <SwiperSlide>
                <div key={reference.id} className="m-3">
                  <img
                    className="client-logo"
                    src={`https://cms-interlink.onrender.com${logoUrl}`}
                    alt={attributes.Name || "Client logo"}
                  />
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <p className="text-white text-center">
            No references available.
          </p>
        )}
      </div>
    </Swiper> */}
      </div>
    </div>
  );
}

export default Reference;
