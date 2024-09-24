import Image from "next/image";
import logo from "@/public/assets/img/pricing/offre.png";
import Facilitedacces from "@/public/assets/img/pricing/1-Facilite-dacces.png";
import Miseajour from "@/public/assets/img/pricing/3-Mise-a-jour.png";
import Evolutivite from "@/public/assets/img/pricing/2-Evolutivite.png";

import Personnalisationapprofondie from "@/public/assets/img/pricing/4-Personnalisation-approfondie.png";
import ContrOLetotal from "@/public/assets/img/pricing/5-ContrOLe-total.png";
import Securitedesdonnees from "@/public/assets/img/pricing/6-Securite-des-donnees.png";
import creditCard from "@/public/assets/img/pricing/credit-card-payment-concept-illustration.png";
import Link from "next/link";
function page() {
  return (
    <>
      <section id="testimonial" className="pt-[150px] pb-24 bg-white">
        {/* <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start mx-3 space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="lg:w-6/12 text-left">
              <h1 className="text-xl font-bold leading-10 tracking-tight sm:text-5xl  text-primary  pt-10 mb-4">
                Découvrez l&apos;ensemble <br /> de nos offres
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Faites votre choix entre nos deux principaux modes
                d’hébergement.
              </p>
            </div>
            <div className="lg:w-6/12 flex justify-center lg:justify-end">
              <Image
                src={logo}
                alt="Image"
                width={594}
                height={377}
                className="inline-block"
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div> */}
        <div className="container ">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-3/5 text-left px-3">
              <h1 className="text-xl font-bold leading-10 tracking-tight sm:text-5xl  text-primary  pt-10 mb-4">
                Découvrez l&apos;ensemble <br /> de nos offres
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Faites votre choix entre nos deux principaux modes
                d&apos;hébergement.
              </p>
            </div>
            <div className="lg:w-2/5 flex justify-center lg:justify-end">
              {/* <Image
                alt="Image"
                loading="lazy"
                width="594"
                height="377"
                decoding="async"
                className="inline-block"
                style="color:transparent;object-fit:contain;max-width:100%;height:auto"
                src={logo}
              /> */}
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
                src={logo}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-gray-800">
              Le mode hébergé &quot;SaaS&quot;
            </h4>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Notre <strong>mode d’hébergement SaaS</strong> propose un accès{" "}
              <strong>immédiat</strong> et <strong>sécurisé</strong> à{" "}
              <strong>CentralBill</strong> directement en ligne, éliminant ainsi
              la nécessité d’installations locales complexes. Cette approche
              offre une multitude d’avantages significatifs pour optimiser votre
              expérience utilisateur et renforcer l’efficacité de vos
              opérations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center border-t-8 border-x-4 border-b-4 border-gray-800">
              <div className="text-center w-1/3">
                <Image
                  src={Facilitedacces}
                  alt="Accessibilité et Mobilité"
                  className="w-64 h-64 mx-auto"
                />
              </div>
              <h3 className="text-lg font-medium mt-4 text-gray-800">
                Accessibilité et Mobilité
              </h3>
              <p className="mt-2 text-gray-600">
                L&apos;offre SaaS permet un accès instantané aux services depuis
                n&apos;importe quel endroit, favorisant la mobilité des
                utilisateurs et garantissant une disponibilité universelle.
              </p>
            </div>

            <div className="text-center">
              <Image
                src={Miseajour}
                alt="Simplicité Opérationnelle"
                className="w-64 h-64 mx-auto"
              />
              <h3 className="text-lg font-medium mt-4 text-gray-800">
                Simplicité Opérationnelle
              </h3>
              <p className="mt-2 text-gray-600">
                Élimination des complexités liées à l&apos;installation et à la
                maintenance locales, avec des mises à jour automatiques qui
                simplifient la gestion quotidienne.
              </p>
            </div>
            <div className="text-center">
              <Image
                src={Evolutivite}
                alt="Économies de Coûts et Évolutivité"
                className="w-64 h-64 mx-auto"
              />
              <h3 className="text-lg font-medium mt-4 text-gray-800">
                Économies de Coûts et Évolutivité
              </h3>
              <p className="mt-2 text-gray-600">
                Réduction des coûts d&apos;infrastructure initiaux, avec la
                capacité d&apos;ajuster les ressources en fonction des besoins
                pour une solution économique et évolutive.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            {/* Title and Description */}
            <h4 className="text-2xl font-semibold text-gray-800">
              Le mode hébergé &quot;SaaS&quot;
            </h4>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Notre <strong>mode d’hébergement SaaS</strong> propose un accès{" "}
              <strong>immédiat</strong> et <strong>sécurisé</strong> à{" "}
              <strong>CentralBill</strong> directement en ligne, éliminant ainsi
              la nécessité d’installations locales complexes. Cette approche
              offre une multitude d’avantages significatifs pour optimiser votre
              expérience utilisateur et renforcer l’efficacité de vos
              opérations.
            </p>
          </div>

          {/* SaaS Features in Grid Layout */}
          <div className="container">
            <div className="flex flex-wrap justify-center md:justify-start">
              {/* <!-- single pricing table starts --> */}
              {/* Accessibilité et Mobilité */}
              <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
                <div className="pricing-box">
                  <div className="w-2/5 mx-auto text-center relative">
                    <Image
                      src={Facilitedacces}
                      alt="Accessibilité et Mobilité"
                      className="object-cover"
                      //   className="w-64 h-64 mx-auto"
                    />
                  </div>
                  <div className="mb-3">
                    <h3 className="package-name">Accessibilité et Mobilité</h3>
                  </div>
                  <div className="mb-5">
                    <p className="mt-2 text-gray-600">
                      L&apos;offre SaaS permet un accès instantané aux services
                      depuis n&apos;importe quel endroit, favorisant la mobilité
                      des utilisateurs et garantissant une disponibilité
                      universelle.
                    </p>
                  </div>
                  <a href="#" className="btn">
                    Get It
                  </a>
                </div>
              </div>
              {/* <!-- single pricing table ends --> */}
              {/* <!-- single pricing table starts --> */}
              {/* Simplicité Opérationnelle */}
              <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
                <div className="pricing-box !bg-blue-100">
                  <div className="w-2/5 mx-auto text-center relative">
                    <Image
                      src={Miseajour}
                      alt="Simplicité Opérationnelle"
                      className="object-cover"
                      //   className="w-64 h-64 mx-auto"
                    />
                  </div>
                  <div className="mb-3">
                    <h3 className="package-name">Simplicité Opérationnelle</h3>
                  </div>
                  <div className="mb-5">
                    <p className="mt-2 text-gray-600">
                      Élimination des complexités liées à l&apos;installation et
                      à la maintenance locales, avec des mises à jour
                      automatiques qui simplifient la gestion quotidienne.
                    </p>
                  </div>
                  <a href="#" className="btn">
                    Get It
                  </a>
                </div>
              </div>
              {/* <!-- single pricing table ends --> */}
              {/* <!-- single pricing table starts --> */}
              {/* Économies de Coûts et Évolutivité */}
              <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
                <div className="pricing-box">
                  <div className="w-2/5 mx-auto text-center relative">
                    <Image
                      src={Evolutivite}
                      alt="Économies de Coûts et Évolutivité"
                      className="object-cover"
                      //   className="w-64 h-64 mx-auto"
                    />
                  </div>
                  <div className="mb-3">
                    <h3 className="package-name">
                      Économies de Coûts et Évolutivité
                    </h3>
                  </div>
                  <div className="mb-5">
                    <p className="mt-2 text-gray-600">
                      Réduction des coûts d&apos;infrastructure initiaux, avec
                      la capacité d&apos;ajuster les ressources en fonction des
                      besoins pour une solution économique et évolutive.
                    </p>
                  </div>

                  <a href="#" className="btn">
                    Get It
                  </a>
                </div>
              </div>
              {/* <!-- single pricing table ends --> */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h5 className="text-3xl font-semibold text-gray-800 mb-6">
            Le mode local &quot;On-Premise&quot;
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <p className="text-gray-600 leading-relaxed">
                Intégrée directement sur vos serveurs, la solution CentralBill
                sous le mode d’hébergement On-Premise vous permettra d’assurer
                un contrôle total sur la passerelle en étant assistés par nos
                experts. Ce mode présente également des bénéfices.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="flex flex-wrap justify-center md:justify-start">
              {/* <!-- single pricing table starts --> */}
              {/* Accessibilité et Mobilité */}
              <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
                <div className="pricing-box">
                  <div className="w-2/5 mx-auto text-center relative">
                    <Image
                      src={Personnalisationapprofondie}
                      alt="Personnalisation approfondie"
                      className="object-cover"
                      //   className="w-64 h-64 mx-auto"
                    />
                  </div>
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold mt-4">
                      Personnalisation approfondie
                    </h3>
                  </div>
                  <div className="mb-5">
                    <p className="text-gray-600 mt-2">
                      En ayant la solution CentralBill hébergée sur vos propres
                      serveurs, vous avez un contrôle permanent sur vos données
                      de transaction et la configuration.
                    </p>
                  </div>
                  {/* <a href="#" className="btn">
                    Get It
                  </a> */}
                </div>
              </div>
              {/* <!-- single pricing table ends --> */}
              {/* <!-- single pricing table starts --> */}
              {/* Simplicité Opérationnelle */}
              <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
                <div className="pricing-box !bg-blue-100">
                  <div className="w-2/5 mx-auto text-center relative">
                    <Image
                      src={ContrOLetotal}
                      alt="Contrôle total"
                      className="object-cover"
                      //   className="w-64 h-64 mx-auto"
                    />
                  </div>
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold mt-4">
                      Contrôle total
                    </h3>
                  </div>
                  <div className="mb-5">
                    <p className="text-gray-600 mt-2">
                      Personnalisez l’expérience utilisateur et les
                      fonctionnalités de CentralBill en fonction de vos besoins
                      spécifiques.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- single pricing table ends --> */}
              {/* <!-- single pricing table starts --> */}
              {/* Économies de Coûts et Évolutivité */}
              <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
                <div className="pricing-box">
                  <div className="w-2/5 mx-auto text-center relative">
                    <Image
                      src={Securitedesdonnees}
                      alt="Personnalisation approfondie"
                      className="object-cover"
                      //   className="w-64 h-64 mx-auto"
                    />
                  </div>
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold mt-4">
                      Sécurité des données
                    </h3>
                  </div>
                  <div className="mb-5">
                    <p className="text-gray-600 mt-2">
                      Vous avez un contrôle direct sur les mesures de sécurité
                      pour protéger les données de transactions et personnelles.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- single pricing table ends --> */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-gray-100">
        <div className="container">
          <div className="flex flex-wrap items-center">
            {/* Text Section */}
            <div className="lg:w-[50%] text-left px-3">
              <h2 className="text-2xl font-semibold mb-4 sm:text-5xl">
                Tarification
              </h2>

              {/* Divider */}
              <hr className="my-4 border-t border-gray-300" />

              {/* Text Content */}
              <p className="text-lg mb-4">
                Notre tarification sur mesure,
                <br />
                adaptée à vos exigences
              </p>
              <div className="mt-6 flex items-center space-x-4">
                {/* Button */}
                <Link
                  href="/"
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Contactez-nous dès maintenant
                </Link>

                {/* Icon */}
                <Link
                  href="#"
                  className="back-to-top w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white text-lg z-20 duration-300 hover:bg-blue-400"
                >
                  <i className="lni lni-arrow-right"></i>
                </Link>
              </div>

              {/* Final Text */}
              <p className="mt-6 text-left text-gray-700">
                Optez pour la solution qui s&apos;adapte à vous, qui sécurise
                vos transactions avec une disponibilité immédiate de vos fonds
                et qui offre une expérience client exceptionnelle
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-[50%] flex justify-center lg:justify-end">
              <Image
                src={creditCard}
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

export default page;
