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
import { getTestimonials } from "../_lib/data-services";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetTestimonials() {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching setTestimonials:", err);
        setError("Failed to load setTestimonials.");
      } finally {
        setLoading(false);
      }
    }

    fetTestimonials();
  }, []);
  const testimonialData =
    testimonials && Array.isArray(testimonials.data) ? testimonials.data : [];

  return (
    <section id="testimonial" className="py-24 bg-accent">
      <div className="container">
        <div className="flex justify-center mx-3">
          <div className="w-full lg:w-10/12">
            <div className="text-center">
              <h2 className="mb-3 text-4xl text-primary font-bold tracking-wide">
                Ce que nos clients disent de nous
              </h2>
              <div className="flex mb-3 justify-center">
                <div className="w-16 h-1 rounded-full bg-primary-hover inline-flex"></div>
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={3} // 3 éléments par vue
              spaceBetween={30} // Espacement entre les éléments
              //  navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }} // 5-second delay
              //onSwiper={(swiper) => console.log(swiper)}
              //  onSlideChange={() => console.log('slide change')}
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
              {testimonialData.length > 0 ? (
                testimonialData.map((testimonial) => {
                  const attributes = testimonial.attributes || {};
                  const logoUrl = attributes.image?.data?.attributes?.url || "";
                  return (
                    <SwiperSlide key={testimonial.id}>
                      <div className="item focus:outline-none">
                        <div className="text-center py-10 px-8 md:px-10 rounded border border-gray-900">
                          <div className="text-center">
                            <p className="text-gray-600 leading-loose">
                              {attributes.commentary}
                            </p>
                          </div>
                          <div className="my-3 mx-auto w-24 h-24 shadow-md rounded-full relative">
                            <Image
                              fill
                              className="object-cover rounded-full p-2 w-full"
                              src={`https://cms-interlink.onrender.com${logoUrl}`}
                              alt=""
                            />
                          </div>
                          <div className="mb-2">
                            <h2 className="font-bold text-lg uppercase text-accent-hover mb-2">
                              {attributes.Name}
                            </h2>
                            <h3 className="font-medium text-primary text-sm">
                              {attributes.Compagnie}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })
              ) : (
                <p className="text-white text-center">No products available.</p>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;
