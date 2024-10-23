import Image from "next/image";
import Link from "next/link";
import { getArticles } from "../_lib/data-services";
import { formatDate } from "../_utiles/formatDate";
import { STRAPI_URL } from "../_lib/utils";

async function Article() {
  const articles = await getArticles();

  return (
    <div>
      {/* title, author, imageSource ,content  */}
      <div className="mt-20 bg-accent  mx-auto py-20 relative">
        <div className="flex pt-10 justify-center items-center font-poppins py-10 lg:py-0 px-10">
          <div className="space-y-5 text-center w-full flex justify-center ">
            <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
              Articles
            </h1>
          </div>
        </div>

        {/* Floating Input Field */}
        <div className="mx-auto">
          <form className="max-w-sm mx-auto">
            <input
              type="text"
              className="absolute inset-x-0 form-input bottom-0 translate-y-1/2 !mb-0 mx-auto !w-1/2  border border-gray-300 rounded shadow-lg"
              placeholder="rechercher ici"
            />
          </form>
        </div>
      </div>

      <form className="">
        <div className="!w-1/2 mt-10 grid grid-flow-col auto-cols-fr !mx-auto gap-5">
          {/* Select for "countries" */}
          <select
            id="countries"
            className="border border-primary text-primary text-sm rounded focus:ring-accent focus:border-accent w-full p-2.5"
            defaultValue="" // Set defaultValue to the desired default option
          >
            <option value="" disabled>
              selectionner le type
            </option>
            <option>Evenement</option>
            <option>Article</option>
            <option>News</option>
          </select>

          {/* Select for "Technologies" */}
          <select
            id="Technologies"
            className="border border-primary text-primary text-sm rounded focus:ring-accent focus:border-accent w-full p-2.5"
            defaultValue="" // Set defaultValue to the desired default option
          >
            <option value="" disabled>
              selectionner le Technologie
            </option>
            <option>Next JS</option>
            <option>Angular</option>
            <option>Developement Mobile</option>
          </select>
        </div>
      </form>

      <div className="mx-90 px-90 md:px-8 lg:px-[20rem]">
        {" "}
        {/* Réduit le padding horizontal */}
        <div className="wrapper mx-auto mt-28 grid gap-3 md:gap-4 p-2 lg:p-4 font-poppins sm:grid-cols-2 lg:grid-cols-2">
          {/* <div className="wrapper mx-auto mt-28 grid gap-0.5 md:gap-0.5 p-2 lg:p-4 font-poppins sm:grid-cols-2 lg:grid-cols-2"> */}{" "}
          {/* Réduit le gap et padding */}
          {articles?.data?.length > 0 &&
            articles.data.map((data) => {
              const article = data.attributes || {};
              const imageUrl = article.image?.data?.attributes?.url || "";
              const fullImageUrl = `${STRAPI_URL}${imageUrl}`;

              return (
                <div
                  key={data.id}
                  className="relative w-full group border rounded-lg shadow-md cursor-pointer overflow-hidden transition-transform duration-500 hover:shadow-lg"
                >
                  {/* Article Image */}
                  <div className="relative w-full h-48">
                    <Image
                      fill
                      className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200 ease-in-out"
                      src={fullImageUrl}
                      placeholder="blur"
                      blurDataURL={fullImageUrl}
                      quality={90}
                      alt="article image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {/* Article Content */}
                  <div className="p-4 bg-white flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    {/* Article Text Content */}
                    <div className="flex-1">
                      <p className="text-lg title-font text-primary leading-10 tracking-tight font-bold">
                        {article.title}
                      </p>
                      <p className="text-sm pb-4 mt-2">
                        {formatDate(article.createdAt)}
                      </p>
                      <p className="text-sm mt-2">
                        {article.description.substring(0, 150)}...
                        <Link
                          href={`/article/${data.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          Lire la suite
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                // {/* </Link> */}
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Article;
