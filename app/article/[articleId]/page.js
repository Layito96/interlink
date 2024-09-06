import Image from "next/image";
import Link from "next/link";
import newlogoInterlink from "@/public/assets/img/logo/newlogoInterlink.svg";
import banner from "@/public/assets/img/banner.jpg";
import viberLogo from "@/public/assets/img/viberLogo.svg";
import robot2 from "/public/robot2.webp";
import { getArticle } from "@/app/_lib/data-services";

async function page({ params }) {
  const articleData = await getArticle(params.articleId);
  const article = articleData.data;

  console.log(article);
  return (
    <div>
      <div className="cs-article !my-40">
        <div className="container intro-wrapper">
          <div className="intro-background-wrapper">
            <Image
              src={banner}
              alt=""
              width={800} // utilisez la largeur et la hauteur appropriées
              height={600}
              priority
            />
          </div>
          <div className="intro-title-wrapper">
            <div className="intro-logo">
              <Image
                src={viberLogo}
                width="326"
                height="101"
                alt="Development of Viber, a Messaging and VoIP App with 1B+ Users"
                //className="lazy entered loaded"
                data-src="/testimonials-logos/viber-logo.svg"
                data-ll-status="loaded"
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
            </div>
          </div>

          <div className="container mt-5">
            <div className="text-justify py-10 px-8 md:px-10 rounded border border-accent">
              <div className="text-justify">
                <div className="text-gray-600 leading-loose ">
                  {article.attributes.content &&
                    article.attributes.content.map((item, index) => {
                      switch (item.type) {
                        case "heading":
                          // Determine the heading level based on item.level
                          const HeadingTag = `h${item.level}`;
                          return (
                            <HeadingTag key={index}>
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
                            <Image
                              key={index}
                              src={item.image.url}
                              alt={item.image.alternativeText}
                              width={item.image.width}
                              height={item.image.height}
                            />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
