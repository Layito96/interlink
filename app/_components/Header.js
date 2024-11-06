"use client";
import Image from "next/image";
import robot2 from "/public/robot2.webp";
import { useEffect } from "react";
import AOS from "aos";

function Header() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <section
        id="hero-area"
        className="w-full h-screen pb-50 relative overflow-hidden"
      >
        <video
          id="background-video"
          className="absolute inset-0 w-full h-screen object-cover -z-10"
          autoPlay
          priority={"true"}
          loop
          muted
        >
          <source src="/bg-interlink.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6 overflow-hidden z-10">
          <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              className="lg:text-[2.5rem] md:text-[2.5rem] text-[1.5rem]  xl:text-4xl  font-bold leading-tight sm:pr-8 xl:pr-10"
            >
              <span className="text-header-gradient">INTERLINK</span> votre
              partenaire digital pour des solutions logicielles innovantes,
              propulsées par l&apos;intelligence artificielle
            </h1>

            <p
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="paragraph  block"
            >
              Depuis 15 ans, INTERLINK conçoit des solutions digitales sur
              mesure pour les entreprises et les institutions...
            </p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
            >
              <div
                className="text-center mb-10 wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <a className="btn" href="#contact">
                  Contactez Nous
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full">
              <Image
                data-aos="fade-up"
                data-aos-once="true"
                // placeholder="blur"
                // placeholder="blur"
                priority
                src={robot2}
                alt=""
                className="-mt-4 h-[30rem] lg:float-right relative sm:mx-auto z-10 hidden lg:block md:block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
