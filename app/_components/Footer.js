import logoInterlink from "@/public/assets/img/InterlinkLogofinal/2.svg";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <>
      <footer id="footer" className="bg-primary py-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div className="mx-3 mb-8">
                <div className="footer-logo mb-3 ">
                  <Image
                    src={logoInterlink}
                    width={500}
                    height={300}
                    className="rounded-lg"
                    alt="Interlink Logo"
                    priority
                  />
                </div>
                <p className="text-gray-300">
                  VOTRE PARTENAIRE DE DIGITALISATION
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
              <div className="mx-3 mb-8">
                <h3 className="font-bold text-xl text-white mb-3">
                  Expertises
                </h3>
                <ul>
                  <li>
                    <Link href="/" className="footer-links">
                      Site Internet
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footer-links">
                      IA générative
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footer-links">
                      Développement Web
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footer-links">
                      Développement Mobile
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-3">
                <h3 className="font-bold text-xl text-white mb-3">
                  Ressources
                </h3>
                <ul>
                  <li>
                    <Link href="/article" className="footer-links">
                      Articles
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div className="mx-3 mb-8">
                <h3 className="font-bold text-xl text-white mb-5">À propos</h3>
                <ul>
                  <li>
                    <Link href="#" className="footer-links">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="footer-links">
                      Nos Offres
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footer-links">
                      Produits
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footer-links">
                      Equipe
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footer-links">
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="footer-links">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
              <div className="mx-3 mb-8">
                <h3 className="font-bold text-xl text-white mb-5">
                  Suivez-nous sur les réseaux
                </h3>
                <ul className="social-icons flex justify-start">
                  <li className="mx-2">
                    <Link href="#" className="footer-icon hover:bg-indigo-500">
                      <i
                        className="lni lni-facebook-original"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link href="#" className="footer-icon hover:bg-blue-400">
                      <i
                        className="lni lni-twitter-original"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link href="#" className="footer-icon hover:bg-red-500">
                      <i
                        className="lni lni-instagram-original"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link href="#" className="footer-icon hover:bg-indigo-600">
                      <i
                        className="lni lni-linkedin-original"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="bg-accent-secondary py-6 border-t-2 border-gray-700 border-dotted">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <p className="text-primary">
                &copy; Tous droit réservés par &nbsp;
                <Link
                  className="text-primary transition-all duration-300 hover:text-accent-hover"
                  href=""
                  rel="nofollow"
                >
                  Interlink
                </Link>
                | {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Go to Top Link --> */}
      <Link
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-primary text-white text-lg z-20 duration-300 hover:bg-blue-400"
      >
        <i className="lni lni-arrow-up"></i>
      </Link>

      {/* <!-- Preloader --> */}
      <div id="preloader">
        <div className="loader" id="loader-1"></div>
      </div>
    </>
  );
}

export default Footer;
