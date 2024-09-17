import Image from "next/image";
import Link from "next/link";

function ArticleCard() {
  const articles = [
    {
      id: 1,
      imageSrc:
        "https://priv-web-nomeo-prod.apnl.ws/blog/article-66c6ec860999d.png",
      title:
        "Comment les chatbots intelligents transforment-ils le service client en ligne ?",
      description:
        "Les chatbots intelligents révolutionnent le service client en ligne en offrant une disponibilité 24/7, des réponses instantanées, et une personnalisation des interactions. En intégrant l'intelligence artificielle, ils permettent de réduire les coûts, d'améliorer l'expérience utilisateur, et de gérer efficacement un grand nombre de demandes simultanées.",
      link: "/blog/les%20chatbots%20intelligents%20transforment%20le%20service%20client%20en%20ligne",
    },
    {
      id: 2,
      imageSrc:
        "https://priv-web-nomeo-prod.apnl.ws/blog/article-66a7a944ab56f.png",
      title:
        "Comment l'Intelligence Artificielle peut-elle révolutionner votre expérience utilisateur ?",
      description:
        "Les chatbots intelligents révolutionnent le service client en ligne en offrant une disponibilité 24/7, des réponses instantanées, et une personnalisation des interactions. En intégrant l'intelligence artificielle, ils permettent de réduire les coûts, d'améliorer l'expérience utilisateur, et de gérer efficacement un grand nombre de demandes simultanées.",
      link: "/blog/les%20chatbots%20intelligents%20transforment%20le%20service%20client%20en%20ligne",
    },
    {
      id: 3,
      imageSrc:
        "https://priv-web-nomeo-prod.apnl.ws/blog/article-66a3760e47d5f.png",
      title:
        "L'IA dans les applications mobiles : quels sont les fondamentaux à connaître ?",
      description:
        "Les chatbots intelligents révolutionnent le service client en ligne en offrant une disponibilité 24/7, des réponses instantanées, et une personnalisation des interactions. En intégrant l'intelligence artificielle, ils permettent de réduire les coûts, d'améliorer l'expérience utilisateur, et de gérer efficacement un grand nombre de demandes simultanées.",
      link: "/blog/les%20chatbots%20intelligents%20transforment%20le%20service%20client%20en%20ligne",
    },
    // Repeat the above object for more articles
  ];
  return (
    // <section className="container blog-container mx-auto">
    //   <h2 className="title-style title-style-blue text-center mb-8">
    //     Mieux nous décoder
    //   </h2>
    //   <div className="-mx-4 flex flex-wrap">
    //     <article className="w-full px-4 md:w-1/2 lg:w-1/3 mb-8">
    //       <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    //         <Image
    //           src="https://priv-web-nomeo-prod.apnl.ws/blog/article-66c6ec860999d.png"
    //           alt=""
    //           width={500} // Adjust the width accordingly
    //           height={160}
    //           className="w-full h-[160px] object-cover rounded-t-lg"
    //         />
    //         <div className="p-4">
    //           <h3 className="text-lg font-semibold text-blue-700 mb-2">
    //             Comment les chatbots intelligents transforment-ils le service
    //             client en ligne ?
    //           </h3>
    //           <p className="text-gray-700 mb-4">
    //             Les chatbots intelligents révolutionnent le service client en
    //             ligne en offrant une disponibilité 24/7, des réponses
    //             instantanées, et une personnalisation des interactions. En
    //             intégrant l'intelligence artificielle, ils permettent de réduire
    //             les coûts, d'améliorer l'expérience utilisateur, et de gérer
    //             efficacement un grand nombre de demandes simultanées.
    //           </p>
    //           <Link href="/blog/les%20chatbots%20intelligents%20transforment%20le%20service%20client%20en%20ligne">
    //             Lire la suite
    //           </Link>
    //         </div>
    //       </div>
    //     </article>
    //     {/* Repeat the <article> block for each blog post */}
    //   </div>
    //   <p className="text-center mt-8">
    //     <Link href="/blog">
    //       Notre blog
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="16"
    //         height="16"
    //         viewBox="0 0 16 16"
    //         role="img"
    //       >
    //         <path
    //           fill="#035aa6"
    //           d="M-143.128-489.8a1.392 1.392 0 0 1 0-2.016l4.068-3.931h-9.464A1.452 1.452 0 0 1-150-497.17a1.452 1.452 0 0 1 1.476-1.426h9.828l-4.232-4.385a1.393 1.393 0 0 1 .073-2.016 1.513 1.513 0 0 1 2.086.071l6.374 6.6a1.394 1.394 0 0 1 .393 1.06 1.4 1.4 0 0 1-.43 1.079l-6.608 6.385a1.5 1.5 0 0 1-1.043.417 1.5 1.5 0 0 1-1.045-.415z"
    //           transform="translate(150 505.38)"
    //         ></path>
    //       </svg>
    //     </Link>
    //   </p>
    // </section>
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
          {articles.map((article) => (
            <div key={article.id} className="w-full px-4 md:w-1/2 lg:w-1/3 ">
              <div className="mb-9 rounded-[20px] bg-transparent dark:bg-dark-2 hover:bg-accent p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 transition-transform transform hover:scale-105">
                <div className="flex flex-row justify-start items-center gap-6 mb-4">
                  <div className="bg-slate-100 flex h-auto pb-4 w-full items-center justify-center rounded-2xl">
                    <Image
                      src={article.imageSrc}
                      alt={article.title}
                      width={500} // Définissez uniquement la largeur ou utilisez 'layout="responsive"' pour les images responsives
                      height={160} // Assurez-vous que la dimension opposée est 'auto' pour éviter la déformation
                      className="w-full h-auto object-cover rounded-t-lg" // Utilisez 'h-auto' pour maintenir le ratio
                    />
                  </div>
                </div>
                <h3 className="text-dark dark:text-accent-hover lg:text-lg md:text-xl font-semibold">
                  {article.title}
                </h3>
                <p className="text-body-color dark:text-dark-6">
                  {article.description}
                </p>
                <Link
                  href={`/article/${article.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Lire la suite
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center">
          <Link
            href="/article"
            className="inline-flex items-center text-primary border-4 border-primary px-10 py-3 rounded-full duration-300 hover:bg-primary hover:text-white"
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
