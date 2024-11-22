import Image from "next/image";
import Link from "next/link";
import {
  getHebergement,
  getHebergementLocaleDesciption,
  getHebergementSaasDesciption,
  getHebergementsLocale,
  getHebergementsSaas,
  getTarification,
} from "../_lib/data-services";
import { STRAPI_URL } from "../_lib/utils";

export default async function page() {
  const hebergementData = await getHebergement();
  const hebergement = hebergementData?.data;
  const imageHebergement = hebergement.attributes.image;
  const imageHebergementUrl = imageHebergement?.data?.attributes?.url || "";
  const HebergementSaasDesciptionData = await getHebergementSaasDesciption();
  const hebergementSaasData = await getHebergementsSaas();
  const hebergementSaas = hebergementSaasData?.data;
  const HebergementLocaleDesciptionData =
    await getHebergementLocaleDesciption();
  const hebergementLocaleData = await getHebergementsLocale();
  const hebergementLocale = hebergementLocaleData?.data;
  const tarificationData = await getTarification();
  const tarification = tarificationData?.data;
  const imagePricing = tarification.attributes.image;
  const imagePricingUrl = imagePricing?.data?.attributes?.url || "";

  return (
    <>
      <section id="testimonial" className="pt-[150px] pb-24 bg-white">
        <div className="container ">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-3/5 text-left px-3">
              <h1 className="text-xl font-bold leading-10 tracking-tight sm:text-5xl  text-primary  pt-10 mb-4">
                {hebergement.attributes.title.length > 20 ? (
                  <>
                    {hebergement.attributes.title.slice(0, 20)}
                    <br />
                    {hebergement.attributes.title.slice(20)}
                  </>
                ) : (
                  hebergement.attributes.title
                )}
              </h1>
              <p className="text-gray-700 leading-relaxed">
                {hebergement.attributes.description}
              </p>
            </div>
            <div className="lg:w-2/5 flex justify-center lg:justify-end">
              <Image
                alt="Image"
                // loading="lazy"
                width={594}
                height={377}
                decoding="async"
                className="inline-block"
                style={{
                  color: "transparent",
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "auto",
                }}
                src={STRAPI_URL + imageHebergementUrl}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pricing Section  SaaS--> */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            {/* Title and Description */}
            <h4 className="text-2xl font-semibold text-gray-800 ">
              {/* Le mode hébergé &quot;SaaS&quot; */}
              {HebergementSaasDesciptionData.data.attributes.title}
            </h4>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-center">
              {HebergementSaasDesciptionData.data.attributes.description}
            </p>
          </div>

          {/* SaaS Features in Grid Layout */}
          <div className="md:container">
            <div className="flex flex-wrap justify-center md:justify-start">
              {/* <!-- single pricing table starts --> */}
              {hebergementSaas.map((hebergement) => {
                const image = hebergement.attributes.image;
                const imageUrl = image?.data?.attributes?.url || "";
                return (
                  <div
                    key={hebergement.id}
                    className="w-full sm:w-2/3 md:!w-1/2 lg:!w-1/3"
                  >
                    <div className="pricing-box">
                      <div className="w-2/5 mx-auto text-center relative">
                        <Image
                          src={STRAPI_URL + imageUrl}
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mb-3">
                        <h3 className="package-name">
                          {hebergement.attributes.title}
                        </h3>
                      </div>
                      <div className="mb-5">
                        <p className="mt-2 text-gray-600">
                          {hebergement.attributes.description}
                        </p>
                      </div>
                      <a href="/valid-url" className="btn">
                        {hebergement.attributes.actionLabel}
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* <!-- single pricing table ends --> */}
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section On-Premise */}
      <section className="py-12 bg-gray-50">
        <div className="md:container mx-auto text-center">
          <div className="mb-8">
            {/* Title and Description */}
            <h4 className="text-2xl font-semibold text-gray-800 ">
              {HebergementLocaleDesciptionData.data.attributes.title}
            </h4>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-center">
              {HebergementLocaleDesciptionData.data.attributes.description}
            </p>
          </div>

          <div className="container">
            <div className="flex flex-wrap justify-center md:justify-start">
              {/* <!-- single pricing table starts --> */}
              {hebergementLocale.map((hebergement) => {
                const image = hebergement.attributes.image;
                const imageUrl = image?.data?.attributes?.url || "";
                return (
                  <div
                    key={hebergement.id}
                    className="w-full sm:w-2/3 md:!w-1/2 lg:!w-1/3"
                  >
                    <div className="pricing-box">
                      <div className="w-2/5 mx-auto text-center relative">
                        <Image
                          src={STRAPI_URL + imageUrl}
                          alt={hebergement.attributes.title}
                          className="object-cover"
                          width={200}
                          height={200}
                          //   className="w-64 h-64 mx-auto"
                        />
                      </div>
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold mt-4">
                          {hebergement.attributes.title}
                        </h3>
                      </div>
                      <div className="mb-5">
                        <p className="text-gray-600 mt-2">
                          {hebergement.attributes.description}
                        </p>
                      </div>
                      {/* <a href="#" className="btn">
 </a> */}
                    </div>
                  </div>
                );
              })}

              {/* <!-- single pricing table ends --> */}
            </div>
          </div>
        </div>
      </section>
      {/* Tarification */}
      <section className="py-8 bg-gray-100">
        <div className="container">
          <div className="flex flex-wrap items-center">
            {/* Text Section */}
            <div className="lg:w-[50%] text-left px-3">
              <h2 className="text-2xl font-semibold mb-4 sm:text-5xl">
                {tarificationData.data.attributes.title}
              </h2>

              <hr className="my-4 border-t border-gray-300" />

              <p className="text-lg mb-4">
                {tarificationData.data.attributes.description}
                <br />
                adaptée à vos exigences
              </p>
              <div className="mt-6 flex items-center space-x-4">
                {/* Button */}
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-accent-hover transition"
                >
                  {tarificationData.data.attributes.actionLabel}
                </Link>

                <Link
                  href="#"
                  className="back-to-top w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white text-lg z-20 duration-300 hover:bg-accent-hover transition"
                >
                  <i className="lni lni-arrow-right"></i>
                </Link>
              </div>

              {/* Final Text */}
              <p className="mt-6 text-left text-gray-700">
                {tarificationData.data.attributes.summary}
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-[50%] flex justify-center lg:justify-end">
              <Image
                src={STRAPI_URL + imagePricingUrl}
                width={1024}
                height={682}
                alt="Tarification"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
