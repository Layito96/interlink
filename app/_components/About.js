"use client";
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@nextui-org/react";
import {
  Card as Cards,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { getWorks } from "../_lib/data-services";

function About({ Works }) {
  console.log("donnees works", Works);
  // tabs state
  const [activeTab, setActiveTab] = useState("engineering");

  const handleHover = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div>
      {/* tabs start */}
      <div className="flex w-full flex-col p-4 md:p-6">
        <Cards>
          <div className="relative">
            <div className="mt-4">
              {activeTab === "engineering" && (
                // <Card className="mb-4 shadow-md">
                //   <CardBody>
                <div className="mb-4 shadow-md">
                  <div>
                    <ul>
                      <li>
                        Conception et développement de logiciels métiers à
                        travers la gamme Amnir
                      </li>
                      <li>
                        Conception et développement d&apos;applications mobiles
                      </li>
                      <li>Systèmes d&apos;information</li>
                      <li>Développementd&apos;applications spécifiques </li>
                      <li>Développement de progiciels</li>
                    </ul>
                  </div>
                </div>

                //   </CardBody>
                // </Card>
              )}
              {activeTab === "consulting" && (
                // <Card className="mb-4 shadow-md">
                //   <CardBody>
                <div className="mb-4 shadow-md">
                  <div>
                    <ul>
                      <li>Audit des systèmes existants</li>
                      <li>
                        Assistance à la conception de cahiers des charges{" "}
                      </li>
                      <li>Pilotage de projet</li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                //   {/* </CardBody>
                // </Card> */}
              )}
              {activeTab === "training" && (
                // <Card className="mb-4 shadow-md">
                //   <CardBody>
                <div className="mb-4 shadow-md">
                  <div>
                    <ul>
                      <li>
                        Étude des besoins en formation Formation en
                        inter-entreprise
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    ou intra-entreprise Notre Engagement Être et demeurer un
                    partenaire fiable Être disponible et à l’écoute du client
                    Offrir des services et un support de qualité Anticiper les
                    évolutions technologiques Proposer des solutions adaptées
                    Investir dans les nouvelles technologies Investir dans les
                    ressources humaines
                  </div>
                </div>
                //   {/* </CardBody>
                // </Card> */}
              )}
            </div>
            <div className="flex space-x-4">
              <div
                onMouseEnter={() => handleHover("engineering")}
                className={`cursor-pointer p-2 rounded ${
                  activeTab === "engineering"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Ingénierie / Intégration de systèmes
              </div>
              <div
                onMouseEnter={() => handleHover("consulting")}
                className={`cursor-pointer p-2 rounded ${
                  activeTab === "consulting"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Études et Conseils
              </div>
              <div
                onMouseEnter={() => handleHover("training")}
                className={`cursor-pointer p-2 rounded ${
                  activeTab === "training"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Formation
              </div>
            </div>
          </div>
        </Cards>
      </div>
      {/* tabs end */}

      <Cards className="flex w-full flex-col p-4 md:p-6">
        <div className="relative">
          <div className="mt-4">
            {activeTab === "engineering" && (
              // <Card className="mb-4 shadow-md">
              //   <CardBody>
              <div>
                <div>
                  <ul>
                    <li>
                      Conception et développement de logiciels métiers à travers
                      la gamme Amnir
                    </li>
                    <li>
                      Conception et développement d&apos;applications mobiles
                    </li>
                    <li>Systèmes d&apos;information</li>
                    <li>Développementd&apos;applications spécifiques </li>
                    <li>Développement de progiciels</li>
                  </ul>
                </div>
              </div>

              //   </CardBody>
              // </Card>
            )}
            {activeTab === "consulting" && (
              // <Card className="mb-4 shadow-md">
              //   <CardBody>
              <div>
                <div>
                  <ul>
                    <li>Audit des systèmes existants</li>
                    <li>Assistance à la conception de cahiers des charges </li>
                    <li>Pilotage de projet</li>
                    <li></li>
                  </ul>
                </div>
              </div>
              //   {/* </CardBody>
              // </Card> */}
            )}
            {activeTab === "training" && (
              // <Card className="mb-4 shadow-md">
              //   <CardBody>
              <div>
                <div>
                  <ul>
                    <li>
                      Étude des besoins en formation Formation en
                      inter-entreprise
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  ou intra-entreprise Notre Engagement Être et demeurer un
                  partenaire fiable Être disponible et à l’écoute du client
                  Offrir des services et un support de qualité Anticiper les
                  évolutions technologiques Proposer des solutions adaptées
                  Investir dans les nouvelles technologies Investir dans les
                  ressources humaines
                </div>
              </div>
              //   {/* </CardBody>
              // </Card> */}
            )}
          </div>
          <Cards className="mt-[20px] m-[-8px] mb-[31px] pt-[14px] pl-[16px] pr-[16px] pb-[16px] bg-white rounded-[16px]">
            <div
              onMouseEnter={() => handleHover("engineering")}
              className={`cursor-pointer p-2 rounded ${
                activeTab === "engineering"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Ingénierie / Intégration de systèmes
            </div>
            <div
              onMouseEnter={() => handleHover("consulting")}
              className={`cursor-pointer p-2 rounded ${
                activeTab === "consulting"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Études et Conseils
            </div>
            <div
              onMouseEnter={() => handleHover("training")}
              className={`cursor-pointer p-2 rounded ${
                activeTab === "training"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Formation
            </div>
          </Cards>
        </div>
      </Cards>
    </div>
  );
}

export default About;
