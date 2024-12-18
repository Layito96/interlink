import Services from "../_components/Services";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { STRAPI_URL } from "../_lib/utils";

export default function Page() {
  return (
    <div className="container pt-10">
      <Services />

      <Card
        className={
          "p-10 mb-3 relative border-zinc-200 !bg-transparent text-zinc-950 shadow dark:border-accent dark:bg-accent dark:text-zinc-50"
        }
      >
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
              <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
                Notre méthodologie
              </h1>
            </div>
          </div>
        </div>

        <Tabs defaultValue="conseil" className="w-full ">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 h-auto !bg-white shadow">
            <TabsTrigger
              value="conseil"
              className="p-6 data-[state=active]:bg-primary shadow"
            >
              <div className="flex flex-row justify-between items-center">
                <span className="flex justify-center items-center bg-white p-5 text-center rounded shadow align-middle">
                  <i className="ri-heart-pulse-line text-[2.5rem] text-accent-hover"></i>
                </span>
                <span className="flex-grow leading-5 text-md break-words">
                  Conseil et définition de votre projet
                </span>
              </div>
            </TabsTrigger>

            <TabsTrigger
              value="conception"
              className="p-6 data-[state=active]:bg-primary shadow"
            >
              <div className="flex flex-row justify-between items-center">
                <span className="flex justify-center items-center bg-white p-5 text-center rounded shadow align-middle">
                  <i className="ri-heart-pulse-line text-[2.5rem] text-accent-hover"></i>
                </span>
                <span className="flex-grow leading-5 text-md break-words">
                  Conception et identité graphique
                </span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="dev"
              className="p-6 data-[state=active]:bg-primary shadow"
            >
              <div className="flex flex-row justify-between items-center">
                <span className="flex justify-center items-center bg-white p-5 text-center rounded shadow align-middle">
                  <i className="ri-heart-pulse-line text-[2.5rem] text-accent-hover"></i>
                </span>
                <span className="flex-grow leading-5 text-md break-words">
                  Développement technique
                </span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="exploitation"
              className="p-6 data-[state=active]:bg-primary shadow"
            >
              <div className="flex flex-row justify-between items-center">
                <span className="flex justify-center items-center bg-white p-5 text-center rounded shadow align-middle">
                  <i className="ri-heart-pulse-line text-[2.5rem] text-accent-hover"></i>
                </span>
                <span className="flex-grow leading-5 text-md break-words">
                  Lancement & Exploitation
                </span>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="conseil">
            <Card
              className={
                "p-10 mb-3 relative !bg-white !dark:border-accent !border-transparent  !text-black shadow "
              }
            >
              <CardHeader>
                <CardTitle>Conseil et définition de votre projet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <ul className="list-disc pl-5">
                    <li>Identité graphique</li>
                    <li>Logos</li>
                    <li>Iconographie</li>
                    <li>Colors</li>
                  </ul>
                  <p></p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="conception">
            <Card
              className={
                "p-10 mb-3 relative !bg-white !dark:border-accent !border-transparent  !text-black shadow "
              }
            >
              <CardHeader>
                <CardTitle>Conseil et définition de votre projet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <ul className="list-disc pl-5">
                    <li>Identité graphique</li>
                    <li>Logos</li>
                    <li>Iconographie</li>
                    <li>Colors</li>
                  </ul>
                  <p></p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dev">
            <Card
              className={
                "p-10 mb-3 relative !bg-white !dark:border-accent !border-transparent  !text-black shadow "
              }
            >
              <CardHeader>
                <CardTitle>Développement technique</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <ul className="list-disc pl-5">
                    <li>Agilité</li>
                    <li>App (web/mobile/…)</li>
                    <li>BO & API</li>
                    <li>Tests</li>
                  </ul>
                  <p>
                    Ayant toutes les clés en main, notre équipe d&apos;experts
                    peut implémenter le projet. Selon le type de développement,
                    notre équipe aura recours à différentes technologies. En
                    parallèle, nous prenons aussi en charge le développement
                    d&apos;API correspondant aux logiques métiers requises pour
                    votre plateforme, et mettons à votre disposition un
                    backoffice de gestion.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="exploitation">
            <Card
              className={
                "p-10 mb-3 relative !bg-white !dark:border-accent !border-transparent  !text-black shadow "
              }
            >
              <CardHeader>
                <CardTitle>Lancement & Exploitation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <ul className="list-disc pl-5">
                    <li>
                      Hébergement & Mise en production (ou soumission sur les
                      stores)
                    </li>
                    <li>Communication & Animation</li>
                    <li>Analyse et optimisation</li>
                    <li>Support, Maintenance & évolution</li>
                  </ul>
                  <p>
                    La phase de suivi vise à assurer le bon déploiement de
                    l&apos;application sur les stores, à effectuer des tests
                    supplémentaires sur tous supports, à surveiller les
                    performances et à fournir un support continu. Nous proposons
                    aussi la maintenance et l&apos;hébergement de
                    l&apos;application. Nous construisons des partenariats sur
                    le long terme et vous accompagnons de bout en bout. La phase
                    de suivi vise à assurer le bon déploiement de
                    lhttps://crn.mr/fr/application sur les stores, à effectuer
                    des tests supplémentaires sur tous supports, à surveiller
                    les performances et à fournir un support continu. Nous
                    proposons aussi la maintenance et l&apos;hébergement de
                    l&apos;application. Nous construisons des partenariats sur
                    le long terme et vous accompagnons de bout en bout.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>

      <Card
        className={
          "p-10 mb-3 relative border-zinc-200 !bg-transparent text-zinc-950 shadow dark:border-accent dark:bg-accent dark:text-zinc-50"
        }
      >
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
              <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
                Technologies maîtrisées
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            {/* <CardTitle className="text-black">Backend</CardTitle> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[16px]">
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/react_native_e6b047e683.png`}
                  alt=""
                ></img>
              </picture>
            </a>
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/symfony_f79c2ffa2c.png`}
                  alt=""
                ></img>
              </picture>
            </a>
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/flutter_a8b74f56bb.png`}
                  alt=""
                ></img>
              </picture>
            </a>
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/docker_5d1df56bed.png`}
                  alt=""
                ></img>
              </picture>
            </a>
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/nodejs_2571d885bd.png`}
                  alt=""
                ></img>
              </picture>
            </a>
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/php_68c9307bce.png`}
                  alt=""
                ></img>
              </picture>
            </a>
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/typescript_a0d749f316.png`}
                  alt=""
                ></img>
              </picture>
            </a>
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/firebase_logo_bd988f4a66.png`}
                  alt=""
                  width={121}
                  height={31}
                ></img>
              </picture>
            </a>
            <a className="flex rounded-[16px] border-primary border h-[97px]  justify-center items-center relative">
              <picture>
                <img
                  src={`${STRAPI_URL}/uploads/next_js_logo_d378cb46ad.png`}
                  alt=""
                  width={121}
                  height={31}
                ></img>
              </picture>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
