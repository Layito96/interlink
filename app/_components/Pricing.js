import Image from "next/image";
import Facilitedacces from "@/public/assets/img/pricing/1-Facilite-dacces-primary.png";
import Miseajour from "@/public/assets/img/pricing/3-Mise-a-jour-primary.png";
import Evolutivite from "@/public/assets/img/pricing/2-Evolutivite-primary.png";
import Personnalisationapprofondie from "@/public/assets/img/pricing/4-Personnalisation-approfondie.png";
import ContrOLetotal from "@/public/assets/img/pricing/5-ContrOLe-total.png";
import Securitedesdonnees from "@/public/assets/img/pricing/6-Securite-des-donnees.png";

function Pricing() {
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
            Le mode hébergé &quot;SaaS&quot;
          </h4>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Notre <strong>mode d&quot;hébergement SaaS</strong> propose un accès{" "}
            <strong>immédiat</strong> et <strong>sécurisé</strong> à{" "}
            <strong>CentralBill</strong> directement en ligne, éliminant ainsi
            la nécessité d&quot;installations locales complexes. Cette approche
            offre une multitude d&quot;avantages significatifs pour optimiser
            votre expérience utilisateur et renforcer l&quot;efficacité de vos
            opérations.
          </p>
        </div>
        {/* SaaS Features in Grid Layout */}
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-start">
            {/* <!-- single pricing table starts --> */}
            {/* Accessibilité et Mobilité */}
            <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div className="pricing-box !rounded-[20px]">
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
                  Découvrir l&apos;offre
                </a>
              </div>
            </div>
            {/* <!-- single pricing table ends --> */}
            {/* <!-- single pricing table starts --> */}
            {/* Simplicité Opérationnelle */}
            <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div className="pricing-box !bg-blue-100 !rounded-[20px] !border">
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
                    Élimination des complexités liées à l&apos;installation et à
                    la maintenance locales, avec des mises à jour automatiques
                    qui simplifient la gestion quotidienne.
                  </p>
                </div>
                <a href="#" className="btn">
                  Découvrir l&apos;offre
                </a>
              </div>
            </div>
            {/* <!-- single pricing table ends --> */}
            {/* <!-- single pricing table starts --> */}
            {/* Économies de Coûts et Évolutivité */}
            <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div className="pricing-box !rounded-[20px]">
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
                    Réduction des coûts d&apos;infrastructure initiaux, avec la
                    capacité d&apos;ajuster les ressources en fonction des
                    besoins pour une solution économique et évolutive.
                  </p>
                </div>

                <a href="#" className="btn">
                  Découvrir l&apos;offre
                </a>
              </div>
            </div>
            {/* <!-- single pricing table ends --> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
