import React from "react";
import { getAbout, getWorks } from "../_lib/data-services";
import Image from "next/image";
import About from "../_components/About";
import viewbg from "@/public/assets/img/viewm.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";

export default async function Page() {
  const aboutsData = await getAbout();
  const worksData = await getWorks();
  const works = worksData?.data;
  const about = aboutsData?.data;
  const images = about?.attributes?.image?.data?.attributes;
  const imageUrl = about?.attributes?.image?.data?.attributes?.url || "";
  const fullImageUrl = `https://cms-interlink.onrender.com${imageUrl}`;

  return (
    <>
      <section className="h-screen pb-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={viewbg}
            alt="Nomeo Logo Animation"
            layout="fill"
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="relative max-w-screen-xl mx-auto h-full flex items-center z-10">
          <div className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6 px-6 text-left">
            <h1 className="title-font text-white mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl">
              Interlink
            </h1>
            <p className="text-white">{about.attributes.slogan}</p>
          </div>
        </div>
      </section>

      {/* <About Works={works} /> */}

      <section className="mb-32 container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left column with text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Notre histoire
            </h2>

            {about && (
              <>
                <div className="text-justify py-5">
                  {Array.isArray(about?.attributes?.content) &&
                    about.attributes.content.length > 0 &&
                    about.attributes.content.map((item, index) => {
                      switch (item.type) {
                        case "heading":
                          const HeadingTag = `h${item.level}`;
                          return (
                            <HeadingTag
                              key={index}
                              className="title-font text-center pt-4 text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-3xl"
                              style={{
                                fontWeight: item.children.some(
                                  (child) => child.bold
                                )
                                  ? "bold"
                                  : "normal",
                              }}
                            >
                              {item.children.map((child, childIndex) => {
                                if (child.type === "text") {
                                  return (
                                    <React.Fragment key={childIndex}>
                                      {child.text}
                                    </React.Fragment>
                                  );
                                }
                                return null;
                              })}
                            </HeadingTag>
                          );
                        case "paragraph":
                          return (
                            <p key={index} className="py-2">
                              {item.children.map((child, childIndex) => {
                                if (child.type === "text") {
                                  return (
                                    <span
                                      key={childIndex}
                                      style={{
                                        fontWeight: child.bold
                                          ? "bold"
                                          : "normal",
                                      }}
                                    >
                                      {child.text}
                                    </span>
                                  );
                                }
                                return null;
                              })}
                            </p>
                          );
                        case "list":
                          const ListTag =
                            item.format === "ordered" ? "ol" : "ul";
                          return (
                            // <ListTag key={index} className="list-disc">
                            <ListTag key={index} className="list-none">
                              {item.children.map((listItem, listItemIndex) => (
                                <li key={listItemIndex}>
                                  {listItem.children.map(
                                    (child, childIndex) => {
                                      if (child.type === "text") {
                                        return (
                                          <div
                                            className="flex space-x-2 sm:space-x-4"
                                            key={childIndex}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              className="flex-shrink-0 w-6 h-6"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                              ></path>
                                            </svg>
                                            <span
                                              key={childIndex}
                                              style={{
                                                fontWeight: child.bold
                                                  ? "bold"
                                                  : "normal",
                                              }}
                                            >
                                              {child.text}
                                            </span>
                                          </div>
                                        );
                                      }
                                      return null;
                                    }
                                  )}
                                </li>
                              ))}
                            </ListTag>
                          );
                        case "image":
                          return (
                            <div
                              key={index}
                              className="flex justify-center items-center mx-auto"
                            >
                              <Image
                                src={item?.image.url}
                                alt={item?.image.name && item?.image.name}
                                width={Math.min(item?.image.width, 500)}
                                height={Math.min(item?.image.height, 300)}
                                style={{
                                  objectFit: "contain",
                                  maxWidth: "100%",
                                  maxHeight: "100%",
                                  width: "auto",
                                  height: "auto",
                                }}
                              />
                            </div>
                          );
                        default:
                          return null;
                      }
                    })}
                </div>
              </>
            )}
            {/* fin */}
          </div>

          {/* Right column with image */}
          <div className="hidden lg:block lg:w-1/2 text-right">
            <div className="inline-block">
              <Image
                src={fullImageUrl}
                alt="Interlink Logo Animation"
                width={500}
                height={300}
                className="hover:scale-110 transition-transform duration-300 text-center"
              />
            </div>
          </div>
        </div>
      </section>
      <Card className="p-10 mb-3 relative border-zinc-200 !bg-transparent text-zinc-950 shadow dark:border-accent dark:bg-accent dark:text-zinc-50">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
              <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl">
                Nos métiers
              </h1>
            </div>
          </div>
        </div>

        <Tabs defaultValue={works[0]?.attributes?.title} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 h-auto !bg-white shadow">
            {works.map((work) => (
              <TabsTrigger
                key={work.id}
                value={work.attributes.title}
                className="p-6 data-[state=active]:bg-primary shadow"
              >
                <div className="flex flex-row justify-between items-center">
                  <span className="flex justify-center items-center bg-white p-5 text-center rounded shadow align-middle">
                    <i
                      className={`ri-heart-pulse-line text-[2.5rem] text-accent-hover`}
                    ></i>
                  </span>
                  <span className="flex-grow leading-5 text-md break-words">
                    {work.attributes.title}
                  </span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {works.map((work) => (
            <TabsContent key={work.id} value={work.attributes.title}>
              <Card className="p-10 mb-3 relative !bg-white !dark:border-accent !border-transparent !text-black shadow">
                <CardContent className="space-y-2">
                  {work.attributes.content.map((item, index) => {
                    if (item.type === "list") {
                      const ListTag = item.format === "ordered" ? "ol" : "ul";
                      return (
                        <ListTag key={index} className="list-none pl-5">
                          {item.children.map((listItem, listItemIndex) => (
                            <li key={listItemIndex}>
                              {listItem.children.map((child, childIndex) => {
                                if (child.type === "text") {
                                  return (
                                    <div
                                      className="flex space-x-2 sm:space-x-4"
                                      key={childIndex}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="flex-shrink-0 w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                        ></path>
                                      </svg>
                                      <span
                                        key={childIndex}
                                        style={{
                                          fontWeight: child.bold
                                            ? "bold"
                                            : "normal",
                                        }}
                                      >
                                        {child.text}
                                      </span>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </li>
                          ))}
                        </ListTag>
                      );
                    }
                  })}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
      {/* § */}
      <section className="mx-auto mb-32 max-w-7xl">
        <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">
          Nos chiffres clés
        </h2>
        <div className="space-y-12">
          {/* First KPI */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between">
            <div className="mb-5 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <img
                  src="/images/icon-experts.svg"
                  alt=""
                  width="64"
                  height="64"
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-5xl font-bold">20</p>
                  <p className="text-xl">experts</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg">
                Notre agence lyonnaise collabore avec des clients répartis sur
                la France entière, ainsi qu'à l'international. La distance n'est
                jamais une difficulté.
              </p>
            </div>
          </div>

          {/* Second KPI */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="mb-5 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <img
                  src="/images/icon-experience.svg"
                  alt=""
                  width="64"
                  height="64"
                  className="w-16 h-16"
                />
                <div>
                  <div className="flex items-end space-x-1">
                    <p className="text-5xl font-bold">14</p>
                    <p className="text-xl">ans</p>
                  </div>
                  <p className="text-xl">d'expérience</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg">
                Depuis 2010, notre équipe fait grandir son savoir-faire et son
                expertise en transformation numérique, innovation digitale,
                ainsi qu’en maîtrise d’app critique et à fort trafic.
              </p>
            </div>
          </div>

          {/* Third KPI */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between">
            <div className="mb-5 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <img
                  src="/images/icon-application.svg"
                  alt=""
                  width="64"
                  height="64"
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-5xl font-bold">+100</p>
                  <p className="text-xl">apps actives</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg">
                Notre implication avec nos clients sur le long terme constitue
                un gage de qualité et de confiance. Une relation bienveillante à
                entretenir.
              </p>
            </div>
          </div>

          {/* Fourth KPI */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="mb-5 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <img
                  src="/images/icon-downloads.svg"
                  alt=""
                  width="64"
                  height="64"
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-5xl font-bold">10M</p>
                  <p className="text-xl">de téléchargements</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg">
                Vous avez un projet ambitieux ? Critique pour votre entreprise ?
                Nous vous partagerons notre expérience et nous nous adaptons à
                vos contraintes toujours pour le bien de votre projet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
