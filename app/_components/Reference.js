"use client";

import { useEffect, useState } from "react";
import {
  Autoplay,
  Navigation,
  Scrollbar,
  A11y,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { getReferences, getTestimonials } from "../_lib/data-services";

function Reference() {
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReference() {
      try {
        const data = await getReferences();
        setReferences(data);
      } catch (err) {
        console.error("Error fetching members:", err);
        setError("Failed to load members.");
      } finally {
        setLoading(false);
      }
    }

    fetchReference();
  }, []);

  const referencesData =
    references && Array.isArray(references.data) ? references.data : [];
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
        <Swiper
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
                  <SwiperSlide key={reference.id}>
                    <div key={reference.id} className="m-3">
                      <Image
                        width={300} // specify the width of the image (used as a ratio)
                        height={200}
                        className="client-logo w-full h-auto"
                        src={`https://cms-interlink.onrender.com${logoUrl}`}
                        alt={attributes.Name || "Client logo"}
                      />
                    </div>
                  </SwiperSlide>
                );
              })
            ) : (
              <p className="text-white text-center">No references available.</p>
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Reference;
