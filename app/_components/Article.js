import Image from "next/image";
import Link from "next/link";
import newlogoInterlink from "@/public/assets/img/logo/newlogoInterlink.svg";
import banner from "@/public/assets/img/banner.jpg";

function Article() {
  return (
    <div>
      <header id="header-wrap" className="mt-10 relative bg-accent ">
        {/* Navbar Start */}
        <div className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-accent flex-none">
          <div className="container">
            <nav className="navbar py-2 navbar-expand-md flex justify-between items-center relative duration-300 left-0 right-0">
              <Link className="navbar-brand" href="/">
                <Image src={newlogoInterlink} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler focus:outline-none block lg:hidden"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                <Link
                  className="text-primary border border-primary px-10 py-3 rounded-full duration-300 hover:bg-accent-hover hover:text-white"
                  href="#feature"
                >
                  Connexion
                </Link>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </header>
      {/*  */}
      <div className="bg-accent  mx-auto py-20 relative">
        <div className="flex pt-10 justify-center items-center font-poppins py-10 lg:py-0 px-10">
          <div className="space-y-5 text-center w-full flex justify-center ">
            <h1 className="text-4xl ">
              Bits et Octets Explorés dans le Paysage Numérique en Constante
              Évolution.
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

          {/* Commented code (if needed) */}
          {/* <div className="bg-red-500">Item 2</div> */}
          {/* <div className="bg-green-500">Item 3</div> */}
        </div>
      </form>

      <div className="mx-auto lg:mx-[10rem] md:mx-[7rem]">
        <div className="wrapper mx-auto translate-x-[0] opacity-1 duration-500 mt-28 grid font-poppins grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 p-2 lg:p-6">
          <div
            className="group translate-x-[0] opacity-1 duration-500  border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/5-new-killer-features-of-next-js-12"
          >
            <Image
              width={500}
              height={300}
              className=" w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={banner}
              alt="image"
            />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">
                  5 New Killer Features of Next.js 12
                </p>
                <p className="text-sm">
                  Top highlights of a game-changing release by{" "}
                  <span className="font-medium uppercase">Osama Daimallah</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href={`/article/1`}
                  className="csm-item-link js-track-click btn btn-primary-outline btn-arrow-right"
                >
                  Read More
                </Link>
              </div>
              <span className="">
                <Image
                  width={50}
                  height={30}
                  className=" h-12 ml-6 rounded-full"
                  src={banner}
                  alt=""
                />
              </span>
            </div>
          </div>
          <div
            className="group translate-x-[0] opacity-1 duration-500  border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/11-useful-modern-javascript-tips"
          >
            <Image
              width={500}
              height={300}
              className=" w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={banner}
              alt="image"
            />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">
                  11 Useful Modern JavaScript Tips
                </p>
                <p className="text-sm">
                  {" "}
                  by{" "}
                  <span className="font-medium uppercase">Osama Daimallah</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href={`/article/1`}
                  className="csm-item-link js-track-click btn btn-primary-outline btn-arrow-right"
                >
                  Read More
                </Link>
              </div>
              <span className="">
                <Image
                  width={50}
                  height={30}
                  className="h-12 ml-6 rounded-full"
                  src={banner}
                  alt=""
                />
              </span>
            </div>
          </div>
          <div
            className="group translate-x-[0] opacity-1 duration-500  border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/next-js-the-next-big-thing"
          >
            <Image
              width={500}
              height={300}
              className=" w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={banner}
              alt="image"
            />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">Next.js -The next big thing</p>
                <p className="text-sm">
                  My first Post EVER! by{" "}
                  <span className="font-medium uppercase">Osama Daimallah</span>
                </p>
              </div>
              <Image
                width={50}
                height={30}
                className="h-12 ml-6 rounded-full"
                src={banner}
                alt=""
              />
            </div>
          </div>
          <div
            className="group translate-x-[0] opacity-1 duration-500  border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/why-is-nextjs-so-fast-as-compere-to-reactjs"
          >
            <Image
              width={500}
              height={300}
              className=" w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={banner}
              alt="image"
            />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">
                  Why is Nextjs so fast as compere to Reactjs?
                </p>
                <p className="text-sm">
                  I&apos;ll tell you why nextjs is so fast. by{" "}
                  <span className="font-medium uppercase">Osama Daimallah</span>
                </p>
              </div>
              <Image
                width={50}
                height={30}
                className="h-12 ml-6 rounded-full"
                src={banner}
                alt=""
              />
            </div>
          </div>
          <div
            className="group translate-x-[0] opacity-1 duration-500  border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/how-i-code-for-8-hours-without-feeling-tired"
          >
            <Image
              width={500}
              height={300}
              className=" w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={banner}
              alt="image"
            />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">
                  How I code for 8 hours without feeling tired.
                </p>
                <p className="text-sm">
                  {" "}
                  by{" "}
                  <span className="font-medium uppercase">Osama Daimallah</span>
                </p>
              </div>
              <Image
                width={50}
                height={30}
                className="h-12 ml-6 rounded-full"
                src={banner}
                alt=""
              />
            </div>
          </div>
          <div
            className="group translate-x-[0] opacity-1 duration-500  border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/getting-started-with-react-and-next-js"
          >
            <Image
              width={500}
              height={300}
              className=" w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={banner}
              alt="image"
            />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">
                  Getting Started with React and Next.JS{" "}
                </p>
                <p className="text-sm">
                  {" "}
                  by{" "}
                  <span className="font-medium uppercase">Osama Daimallah</span>
                </p>
              </div>
              <Image
                width={50}
                height={30}
                className="h-12 ml-6 rounded-full"
                src={banner}
                alt=""
              />
            </div>
          </div>
          <div
            className="group translate-x-[0] opacity-1 duration-500  border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/top-10-react-icon-libraries"
          >
            <Image
              width={500}
              height={300}
              className=" w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={banner}
              alt="image"
            />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">Top 10 React Icon Libraries</p>
                <p className="text-sm">
                  Compiling the top 10 most used icons library in React by{" "}
                  <span className="font-medium uppercase">Osama Daimallah</span>
                </p>
              </div>
              <Image
                width={50}
                height={30}
                className="h-12 ml-6 rounded-full"
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
