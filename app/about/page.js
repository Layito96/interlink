import React from "react";
import { getAbout } from "../_lib/data-services";
import Image from "next/image";
import About from "../_components/About";

export default async function Page() {
  const aboutsData = await getAbout();
  console.log("donnees about", aboutsData);
  const about = aboutsData?.data; // Ajouter une vérification pour éviter les erreurs si `data` est undefined
  const images = about?.attributes?.image?.data?.attributes;
  const imageUrl = about?.attributes?.image?.data?.attributes?.url || "";
  const fullImageUrl = `https://cms-interlink.onrender.com/api${imageUrl}`;

  return (
    <>
      <div className="mt-40 pt-30 pb-20 text-center">
        {about ? (
          <>
            <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl">
              {about.attributes.title}
            </h1>
            <p className="text-center">
              <Image
                src={fullImageUrl}
                alt={images.name}
                width={Math.min(images.width, 500)}
                height={Math.min(images.height, 300)}
                className="text-center inline-flex"
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
              />
            </p>
            <p>{about.attributes.slogan}</p>
            <div className="text-justify px-[20rem] py-5">
              {about.attributes.content?.length > 0 &&
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
                                    fontWeight: child.bold ? "bold" : "normal",
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
                      const ListTag = item.format === "ordered" ? "ol" : "ul";
                      return (
                        <ListTag key={index} className="list-disc">
                          {item.children.map((listItem, listItemIndex) => (
                            <li key={listItemIndex}>
                              {listItem.children.map((child, childIndex) => {
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
                            src={item.image.url}
                            alt={item.image.name}
                            width={Math.min(item.image.width, 500)}
                            height={Math.min(item.image.height, 300)}
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
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <About />
    </>
  );
}
