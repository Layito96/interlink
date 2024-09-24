import React from "react";

import Image from "next/image";
import Link from "next/link";
import newlogoInterlink from "@/public/assets/img/logo/newlogoInterlink.svg";
import banner from "@/public/assets/img/banner.jpg";
import viberLogo from "@/public/assets/img/viberLogo.svg";
import robot2 from "/public/robot2.webp";
import { getArticle } from "@/app/_lib/data-services";
import ArticleCard from "@/app/_components/ArticleCard";
import { formatDate } from "@/app/_utiles/formatDate";

async function page({ params }) {
  const articleData = await getArticle(params.articleId);
  const article = articleData.data;
  console.log("article d", article.attributes.content);
  const imageUrl = article.attributes.image?.data?.attributes?.url || "";
  // const fullImageUrl = `http://localhost:1338${imageUrl}`;
  const fullImageUrl = `https://cms-interlink.onrender.com${imageUrl}`;

  return (
    <div>
      <div className="cs-article !mt-40">
        <div className="container intro-wrapper">
          <div className="intro-background-wrapper relative">
            <Image
              // src={banner}
              src={fullImageUrl}
              fill
              className="object-cover"
              alt={article.attributes.title}
              // width={800} // utilisez la largeur et la hauteur appropriées
              // height={600}
              priority
            />
          </div>
          <div className="intro-title-wrapper">
            <div className="intro-logo">
              <Image
                src={fullImageUrl}
                width={326}
                height={101}
                alt={article.attributes.title}
                // Le lazy loading est automatique dans Next.js
                priority={false} // ou `priority={true}` si tu veux forcer un chargement immédiat
              />
            </div>
            <h1 className="intro-title text-4xl">{article.attributes.title}</h1>
          </div>
          <div className="intro-columns-wrapper">
            <div className="intro-columns intro-columns-2">
              <div className="intro-column-wrapper">
                <div className="intro-column">
                  <div className="intro-column-title">Categorie</div>
                  <div className="intro-column-content">Article</div>
                </div>
              </div>
              <div className="intro-column-wrapper">
                <div className="intro-column">
                  <div className="intro-column-title">Technologies</div>
                  <div className="intro-column-content">
                    Android, Mobile, Windows Phone
                  </div>
                </div>
              </div>
              <div className="intro-column-wrapper">
                <div className="intro-column">
                  <div className="intro-column-title">Créé le </div>
                  <div className="intro-column-content">
                    {formatDate(article.attributes.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5 px-[20rem]">
            <div className="shadow-md flex text-justify lg:px-[20rem] gap-8 py-10 px-8 md:px-10 rounded border border-accent">
              <div className="w-3/4 text-justify-center">
                <div className="text-gray-600 leading-loose ">
                  {article.attributes.content &&
                    article.attributes.content.map((item, index) => {
                      switch (item.type) {
                        case "heading":
                          // Determine the heading level based on item.level
                          const HeadingTag = `h${item.level}`;
                          return (
                            <HeadingTag
                              key={index}
                              className="title-font pt-4 text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-3xl"
                              style={{
                                fontWeight: item.children.some(
                                  (child) => child.bold
                                )
                                  ? "bold"
                                  : "normal",
                              }} // Apply bold style directly to HeadingTag if any child is bold
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
                            <p key={index}>
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
                          // Use <ul> or <ol> based on the format property
                          const ListTag =
                            item.format === "ordered" ? "ol" : "ul";
                          return (
                            <ListTag key={index} className="list-disc">
                              {item.children.map((listItem, listItemIndex) => (
                                <li key={listItemIndex}>
                                  {listItem.children.map(
                                    (child, childIndex) => {
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
                              className="flex justify-center items-center mx-auto" // Centering the image// Limiting width and height
                            >
                              <Image
                                src={item.image.url}
                                alt={item.image.name}
                                width={Math.min(item.image.width, 500)} // Limiter la largeur à un maximum de 500
                                height={Math.min(item.image.height, 300)} // Limiter la hauteur à un maximum de 300
                                style={{
                                  objectFit: "contain",
                                  maxWidth: "100%",
                                  maxHeight: "100%",
                                  width: "auto", // S'assurer que la largeur est réglée sur "auto" pour maintenir le ratio d'aspect
                                  height: "auto", // S'assurer que la hauteur est réglée sur "auto" pour maintenir le ratio d'aspect
                                }}
                              />
                            </div>
                          );

                        default:
                          return null;
                      }
                    })}
                  <span className="font-medium uppercase">
                    {article.author}
                  </span>
                </div>
              </div>
              <div className="w-1/4 h-auto ml-auto p-2 ">
                <h1 className="title-font text-center text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-3xl">
                  Sommaire
                </h1>
                {article.attributes.content &&
                  article.attributes.content.map((item, index) => {
                    switch (item.type) {
                      case "heading":
                        // Determine the heading level based on item.level
                        const HeadingTag = `h${item.level}`;
                        return (
                          <HeadingTag
                            key={index}
                            className="title-font p-2 border-l-4 text-primary text-sm font-bold leading-10 tracking-tight"
                            style={{
                              fontWeight: item.children.some(
                                (child) => child.bold
                              )
                                ? "bold"
                                : "normal",
                            }} // Apply bold style directly to HeadingTag if any child is bold
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
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last tree Articles */}
      <div>
        <ArticleCard />
      </div>
    </div>
  );
}

export default page;
