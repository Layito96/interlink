"use client";

import { useEffect, useState } from "react";
import { getMembers } from "../_lib/data-services";
import amnirdigitalplatefom from "@/public/assets/img/amnir_digital_platefom.png";
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
import { STRAPI_URL } from "../_lib/utils";

function Products() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const data = await getMembers();
        setMembers(data);
      } catch (err) {
        console.error("Error fetching members:", err);
        setError("Failed to load members.");
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  const productData = Array.isArray(members.data) ? members.data : [];
  return (
    <section id="products" className="carousel-area bg-primary py-32">
      {/* <div className="watermark relative w-[300px] h-[300px]">
        <Image
          alt=""
          // loading="lazy"
          decoding="async"
          fill
          className="transition-all duration-[1500ms] w-[300px] h-[300px] object-cover"
          src={amnirdigitalplatefom}
          style={{ color: "transparent" }}
          priority
        />
      </div> */}
      <div className="container">
        <div className="flex">
          <div className="w-full relative">
            <div className="text-center">
              <h2 className="mb-3 text-4xl text-white font-bold tracking-wide">
                Produits
              </h2>
              <div className="flex mb-3 justify-center">
                <div className="w-16 h-1 rounded-full bg-primary-hover inline-flex"></div>
              </div>
            </div>
            <Swiper
              className="w-full"
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              // autoplay={{ delay: 2000, disableOnInteraction: false }}
              // onSwiper={(swiper) => console.log(swiper)}
              //onSlideChange={() => console.log('slide change')}
              parallax={true}
              breakpoints={{
                // Lorsque la largeur de l'écran est inférieure à 768px, afficher 1 élément
                0: {
                  slidesPerView: 1,
                },
                // Lorsque la largeur de l'écran est entre 768px et 1024px, afficher 2 éléments
                768: {
                  slidesPerView: 2,
                },
                // Lorsque la largeur de l'écran est supérieure à 1024px, afficher 3 éléments
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className="portfolio-carousel w-full justify-center gap-[2.5rem]">
                {
                  productData.length > 0 &&
                    productData.map((product) => {
                      const attributes = product.attributes || {};
                      const logoUrl =
                        attributes.logo?.data?.attributes?.url || "";

                      return (
                        <SwiperSlide key={product.id}>
                          <div
                            className="group project__container  mx-auto"
                            key={product.id}
                          >
                            <div className="project__item">
                              <Image
                                alt={attributes.title || "Product Image"}
                                loading="lazy"
                                // fill
                                width="50"
                                height="45"
                                decoding="async"
                                className=" h-[2.5rem] w-auto transition-all duration-[1500ms] group-hover:h-[2.5rem] lg:h-[3.82219rem]"
                                src={`${STRAPI_URL}${logoUrl}`}
                                style={{ color: "transparent" }}
                              />
                              <p className="font-text text-[1.325rem] font-[500] leading-[2.25rem] md:text-[1.45rem] md:leading-[2.5rem] lg:font-[700] lg:leading-[2.5rem]">
                                {attributes.title}
                              </p>
                            </div>
                            <p className="hidden font-text text-[1rem] font-[500] leading-[1.5rem] transition-all duration-[500] group-hover:visible group-hover:block group-hover:duration-[500] md:mb-[1.38rem] md:text-[1.125rem] md:leading-[1.625rem]">
                              {attributes.Description &&
                                attributes.Description.substring(0, 150)}
                              ...
                            </p>
                          </div>
                        </SwiperSlide>
                      );
                    })
                  // : (
                  //   <p className="text-white text-center">
                  //     No products available.
                  //   </p>
                  // )
                }
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
