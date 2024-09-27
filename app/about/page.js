import React from "react";
import { getAbout, getWorks } from "../_lib/data-services";
import Image from "next/image";
import About from "../_components/About";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";

export default async function Page() {
  const aboutsData = await getAbout();
  const worksData = await getWorks();
  const works = worksData?.data;
  console.log("donnees worksData", works);
  const about = aboutsData?.data; // Ajouter une vérification pour éviter les erreurs si `data` est undefined
  const images = about?.attributes?.image?.data?.attributes;
  const imageUrl = about?.attributes?.image?.data?.attributes?.url || "";
  const fullImageUrl = `https://cms-interlink.onrender.com${imageUrl}`;

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
                alt={images?.name || "Image"}
                width={images?.width ? Math.min(images.width, 500) : 500} // Fallback width if not defined
                height={images?.height ? Math.min(images.height, 300) : 300} // Fallback height if not defined
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
              {/* <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card> */}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <About Works={works} />

      <section class="dark:bg-gray-100 dark:text-gray-800">
	<div class="container flex flex-col-reverse mx-auto lg:flex-row">
		<div class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
			<div class="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div class="space-y-2">
					<p class="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
					<p class="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
			<div class="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div class="space-y-2">
					<p class="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
					<p class="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
			<div class="flex space-x-2 sm:space-x-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
				</svg>
				<div class="space-y-2">
					<p class="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
					<p class="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
		</div>
		<div class="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
			<div class="flex items-center justify-center p-4 md:p-8 lg:p-12">
				{/* <img src="https://source.unsplash.com/640x480/" alt="" class="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"> */}
        <div className="w-full">
              <Image
                data-aos="fade-up"
                data-aos-once="true"
                // placeholder="blur"
                priority
                src="https://images.unsplash.com/photo-1720631442759-6a6a95395f62?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                width={640}
                height={480}
              />
            </div>
			</div>
		</div>
	</div>
</section>
    </>
  );
}
