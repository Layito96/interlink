import Image from "next/image";
import Link from "next/link";
import { getLastArticles } from "../_lib/data-services";
import { STRAPI_URL } from "../_lib/utils";

async function ArticleCard() {
  const articles = await getLastArticles();
  return (
    <section className="pt-20 pb-12 lg:pt-[20px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
                Nos dérniers articles
              </h1>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {articles.map((article) => {
            const image = article.attributes.image;
            const imageUrl = image?.data?.attributes?.url || "";
            return (
              <div key={article.id} className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                <div className="mb-9 rounded-[20px] bg-transparent dark:bg-dark-2 hover:bg-accent p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 transition-transform transform hover:scale-105">
                  <div className="flex flex-row justify-start items-center gap-6 mb-4">
                    <div className="bg-slate-100 flex h-auto pb-4 w-full items-center justify-center rounded-2xl">
                      <Image
                        src={STRAPI_URL + imageUrl}
                        alt={article.attributes.title}
                        width={500} // Définissez uniquement la largeur ou utilisez 'layout="responsive"' pour les images responsives
                        height={160} // Assurez-vous que la dimension opposée est 'auto' pour éviter la déformation
                        className="w-full h-auto object-cover rounded-t-lg" // Utilisez 'h-auto' pour maintenir le ratio
                      />
                    </div>
                  </div>
                  <h3 className="text-dark dark:text-accent-hover lg:text-lg md:text-xl font-semibold">
                    {article.attributes.title}
                  </h3>
                  <p className="text-body-color dark:text-dark-6">
                    {article.attributes.description}
                  </p>
                  <Link
                    href={`/article/${article.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Lire la suite
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center">
          <Link
            href="/article"
            className="inline-flex items-center text-primary border border-primary px-10 py-3 rounded-md duration-300 hover:bg-primary hover:text-white"
          >
            <span className="mr-2">Nos articles</span>
            <i className="lni lni-arrow-right"></i>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ArticleCard;
