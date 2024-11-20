import Image from "next/image";
import {
  getHebergementSaasDesciption,
  getHebergementsSaas,
} from "../_lib/data-services";
import { STRAPI_URL } from "../_lib/utils";

async function Pricing() {
  const HebergementSaasDesciptionData = await getHebergementSaasDesciption();
  const hebergementSaasData = await getHebergementsSaas();
  const hebergementSaas = hebergementSaasData?.data;
  return (
    <section id="pricing" className="py-12 bg-accent">
      <div className="container mx-auto text-center">
        <div className="text-center">
          <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
            Nos Offres
          </h1>
          <div className="flex mb-3 justify-center">
            <div className="w-16 h-1 rounded-full bg-accent-hover inline-flex"></div>
          </div>
        </div>
        <div className="mb-8">
          {/* Title and Description */}
          <h4 className="text-2xl font-semibold text-gray-800">
            {HebergementSaasDesciptionData.data.attributes.title}
          </h4>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {HebergementSaasDesciptionData.data.attributes.description}
          </p>
        </div>
        {/* SaaS Features in Grid Layout */}
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-start">
            {/* <!-- single pricing table starts --> */}
            {hebergementSaas.map((hebergement) => {
              const image = hebergement.attributes.image;
              const imageUrl = image?.data?.attributes?.url || "";
              return (
                <div
                  key={hebergement.id}
                  className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3"
                >
                  <div className="pricing-box !rounded-[20px]">
                    <div className="w-2/5 mx-auto text-center relative">
                      <Image
                        src={STRAPI_URL + imageUrl}
                        alt={hebergement.attributes.title}
                        className="object-cover"
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
                    <a href="#" className="btn">
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
  );
}

export default Pricing;
