import Image from "next/image";
import logo from "@/public/assets/img/pricing/offre.png";
import Facilitedacces from "@/public/assets/img/pricing/1-Facilite-dacces.png";
import Miseajour from "@/public/assets/img/pricing/3-Mise-a-jour.png";
import Evolutivite from "@/public/assets/img/pricing/2-Evolutivite.png";

import Personnalisationapprofondie from "@/public/assets/img/pricing/4-Personnalisation-approfondie.png";
import ContrOLetotal from "@/public/assets/img/pricing/5-ContrOLe-total.png";
import Securitedesdonnees from "@/public/assets/img/pricing/6-Securite-des-donnees.png";
function page() {
  return (
    <>
      <section id="testimonial" className="pt-[150px] pb-24 bg-white">
        <div className="container mx-auto px-4">
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
        </div>
      </section>
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto text-center">
          <div class="mb-8">
            <h4 class="text-2xl font-semibold text-gray-800">
              Le mode hébergé &quot;SaaS&quot;
            </h4>
            <p class="mt-4 text-gray-600 max-w-3xl mx-auto">
              Notre <strong>mode d’hébergement SaaS</strong> propose un accès{" "}
              <strong>immédiat</strong> et <strong>sécurisé</strong> à{" "}
              <strong>CentralBill</strong> directement en ligne, éliminant ainsi
              la nécessité d’installations locales complexes. Cette approche
              offre une multitude d’avantages significatifs pour optimiser votre
              expérience utilisateur et renforcer l’efficacité de vos
              opérations.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center border-t-8 border-x-4 border-b-4 border-gray-800">
              <div className="text-center w-1/3">
                <Image
                  src={Facilitedacces}
                  alt="Accessibilité et Mobilité"
                  class="w-64 h-64 mx-auto"
                />
              </div>
              <h3 class="text-lg font-medium mt-4 text-gray-800">
                Accessibilité et Mobilité
              </h3>
              <p class="mt-2 text-gray-600">
                L&apos;offre SaaS permet un accès instantané aux services depuis
                n&apos;importe quel endroit, favorisant la mobilité des
                utilisateurs et garantissant une disponibilité universelle.
              </p>
            </div>

            <div class="text-center">
              <Image
                src={Miseajour}
                alt="Simplicité Opérationnelle"
                class="w-64 h-64 mx-auto"
              />
              <h3 class="text-lg font-medium mt-4 text-gray-800">
                Simplicité Opérationnelle
              </h3>
              <p class="mt-2 text-gray-600">
                Élimination des complexités liées à l&apos;installation et à la
                maintenance locales, avec des mises à jour automatiques qui
                simplifient la gestion quotidienne.
              </p>
            </div>
            <div class="text-center">
              <Image
                src={Evolutivite}
                alt="Économies de Coûts et Évolutivité"
                class="w-64 h-64 mx-auto"
              />
              <h3 class="text-lg font-medium mt-4 text-gray-800">
                Économies de Coûts et Évolutivité
              </h3>
              <p class="mt-2 text-gray-600">
                Réduction des coûts d&apos;infrastructure initiaux, avec la
                capacité d&apos;ajuster les ressources en fonction des besoins
                pour une solution économique et évolutive.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto text-center">
          <h5 class="text-3xl font-semibold text-gray-800 mb-6">
            Le mode local &quot;On-Premise&quot;
          </h5>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="col-span-1 md:col-span-2">
              <p class="text-gray-600 leading-relaxed">
                Intégrée directement sur vos serveurs, la solution CentralBill
                sous le mode d’hébergement On-Premise vous permettra d’assurer
                un contrôle total sur la passerelle en étant assistés par nos
                experts. Ce mode présente également des bénéfices.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <Image
                src={Personnalisationapprofondie}
                alt="Personnalisation approfondie"
                class="mx-auto w-64 h-64 object-contain"
              />
              <h3 class="text-lg font-semibold mt-4">
                Personnalisation approfondie
              </h3>
              <p class="text-gray-600 mt-2">
                En ayant la solution CentralBill hébergée sur vos propres
                serveurs, vous avez un contrôle permanent sur vos données de
                transaction et la configuration.
              </p>
            </div>
            <div class="text-center">
              <Image
                src={ContrOLetotal}
                alt="Contrôle total"
                class="mx-auto w-64 h-64 object-contain"
              />
              <h3 class="text-lg font-semibold mt-4">Contrôle total</h3>
              <p class="text-gray-600 mt-2">
                Personnalisez l’expérience utilisateur et les fonctionnalités de
                CentralBill en fonction de vos besoins spécifiques.
              </p>
            </div>
            <div class="text-center">
              <Image
                src={Securitedesdonnees}
                alt="Sécurité des données"
                class="mx-auto w-64 h-64 object-contain"
              />
              <h3 class="text-lg font-semibold mt-4">Sécurité des données</h3>
              <p class="text-gray-600 mt-2">
                Vous avez un contrôle direct sur les mesures de sécurité pour
                protéger les données de transactions et personnelles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
