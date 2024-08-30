import Image from "next/image";
import Link from "next/link";
import newlogoInterlink from "/public/newlogoInterlink.svg";
import robot2 from "/public/robot2.webp";

function Header() {
  return (
    <>
      <header id="header-wrap" className="relative bg-accent">
        {/* <!-- Navbar Start --> */}
        <div className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-accent">
          <div className="container mx-auto px-4 bg-accent">
            <nav className="navbar py-2 navbar-expand-md flex justify-between items-center relative duration-300">
              <Link className="navbar-brand" href="/">
                <Image
                  src={newlogoInterlink}
                  alt="Logo"
                  style={{ height: "100%" }}
                />
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

              <div
                className="navbar-collapse lg:items-center lg:justify-center hidden lg:block duration-300 shadow absolute top-full left-0 mt-2 bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                  <li className="nav-item">
                    <Link className="page-scroll active" href="#hero-area">
                      Accueil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="page-scroll" href="#services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="page-scroll" href="#pricing">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="page-scroll" href="#products">
                      Produits
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="page-scroll" href="#team">
                      Equipe
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="page-scroll" href="#testimonial">
                      Testimonial
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="page-scroll" href="#contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
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
        {/* <!-- Navbar End --> */}
      </header>
      <section
        id="hero-area"
        className="w-full h-screen pb-50 relative overflow-hidden"
      >
        <video
          id="background-video"
          className="absolute inset-0 w-full h-screen object-cover -z-10"
          autoPlay
          loop
          muted
        >
          <source src="/bg-interlink.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6 overflow-hidden z-10">
          <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              className="text-[2.5rem] sm:text-3xl xl:text-4xl uppercase font-bold leading-tight sm:pr-8 xl:pr-10"
            >
              <span className="text-header-gradient"> INTERLINK</span> votre
              partenaire digital pour des solutions logicielles innovantes,
              propulsées par l'intelligence artificielle
            </h1>
            <p
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="paragraph hidden sm:block"
            >
              Depuis 15 ans, INTERLINK conçoit des solutions digitales sur
              mesure pour les entreprises et les institutions...
            </p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
            >
              <div
                className="text-center mb-10 wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <a className="btn" href="#contact">
                  Contactez Nous
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full">
              <Image
                src={robot2}
                alt=""
                className="-mt-4 h-[30rem] lg:float-right relative sm:mx-auto z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
