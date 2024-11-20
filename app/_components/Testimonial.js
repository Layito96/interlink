"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTestimonials } from "../_lib/data-services";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card as Cards, CardContent as CardContents } from "./ui/card"; // Renommer ici
import { STRAPI_URL } from "../_lib/utils";

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
    <div>
      <section id="testimonial" className="py-24 bg-accent">
        <div className="container">
          <div className="flex justify-center mx-3">
            <div className="w-full lg:w-10/12 mx-auto">
              <div className="text-center">
                <h2 className="mb-3 text-4xl text-primary font-bold tracking-wide">
                  Ce que nos clients disent de nous
                </h2>
                <div className="flex mb-3 justify-center">
                  <div className="w-16 h-1 rounded-full bg-primary-hover inline-flex"></div>
                </div>
              </div>
              <div className="flex justify-center">
                <Carousel className="w-full max-w-4xl">
                  <CarouselContent>
                    {
                      testimonialData.length > 0 &&
                        testimonialData.map((testimonial) => {
                          const attributes = testimonial.attributes || {};
                          const logoUrl =
                            attributes.image?.data?.attributes?.url || "";
                          return (
                            <CarouselItem key={testimonial.id}>
                              <div className="p-1">
                                <Cards>
                                  <CardContents className="text-center py-10 px-8 md:px-10 rounded border border-gray-900">
                                    <p className="text-gray-600 leading-loose">
                                      <span className="text-6xl text-accent-hover">
                                        “
                                      </span>
                                      {attributes.commentary}
                                      <span
                                        className="text-6xl text-accent-hover"
                                        style={{ float: "right" }}
                                      >
                                        ”
                                      </span>{" "}
                                    </p>
                                    <div className="my-3 mx-auto w-24 h-24 shadow-md rounded-full relative">
                                      <Image
                                        fill
                                        className="object-cover rounded-full p-2 w-full"
                                        src={`${STRAPI_URL}${logoUrl}`}
                                        alt=""
                                        sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 50vw, 
                                        33vw"
                                      />
                                    </div>
                                    <h2 className="font-bold text-lg uppercase text-accent-hover mb-2">
                                      {attributes.Name}
                                    </h2>
                                    <h3 className="font-medium text-primary text-sm">
                                      {attributes.Compagnie}
                                    </h3>
                                  </CardContents>
                                </Cards>
                              </div>
                            </CarouselItem>
                          );
                        })
                      // : (
                      //   <p className="text-white text-center">
                      //     Aucun témoignage disponible.
                      //   </p>
                      // )
                    }
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Testimonial;
