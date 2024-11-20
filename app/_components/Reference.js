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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { getReferences } from "../_lib/data-services";
import { STRAPI_URL } from "../_lib/utils";

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
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="h-fit"
        >
          <div className="flex flex-wrap justify-center items-center">
            {
              referencesData.length > 0 &&
                referencesData.map((reference) => {
                  const attributes = reference.attributes || {};
                  const logoUrl = attributes.logo?.data?.attributes?.url || "";

                  return (
                    <SwiperSlide key={reference.id} className="mt-4 mb-20 ">
                      <div
                        key={reference.id}
                        className="m-3 h-fit flex flex-col items-center"
                      >
                        <HoverCard>
                          <HoverCardTrigger>
                            <Image
                              width={300} // Specify the width of the image (used as a ratio)
                              height={200}
                              className="client-logo w-full h-auto"
                              src={`${STRAPI_URL}${logoUrl}`}
                              alt={attributes.Name || "Client logo"}
                            />
                          </HoverCardTrigger>
                          <HoverCardContent className="m-3 w-fit border-transparent rounded bg-transparent text-center mt-2">
                            {/* Adjust mt-2 to control spacing */}
                            {attributes.Name || "Client logo"}
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </SwiperSlide>
                  );
                })
              // : (
              //   <p className="text-white text-center">No references available.</p>
              // )
            }
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Reference;
