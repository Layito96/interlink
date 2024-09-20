"use client";
import Link from "next/link";

import { useEffect } from "react";

import Image from "next/image";
import newlogoInterlink from "/public/newlogoInterlink.svg";
function Navbar() {
  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const pageScrollLinks = document.querySelectorAll(".page-scroll");

    // Close navbar when a link is clicked
    pageScrollLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
      });
    });

    // Toggle navbar on click
    const handleTogglerClick = () => {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
    };

    navbarToggler.addEventListener("click", handleTogglerClick);

    // Cleanup event listeners when the component is unmounted
    return () => {
      navbarToggler.removeEventListener("click", handleTogglerClick);
      // pageScrollLinks.forEach((link) => {
      //   link.removeEventListener("click", () => {
      //     navbarToggler.classList.remove("active");
      //     navbarCollapse.classList.remove("show");
      //   });
      // });
    };
  }, []);
  return (
    <header id="header-wrap" className="relative bg-accent">
      {/* <!-- Navbar Start --> */}
      <div className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-accent">
        <div className="container mx-auto px-4 bg-accent">
          <nav className="navbar py-2 navbar-expand-md flex justify-between items-center relative duration-300">
            <Link className="navbar-brand" href="/">
              <Image
                src={newlogoInterlink}
                alt="Logo Interlink"
                priority
                // placeholder="blur"
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
                  <Link className="page-scroll" href="/products">
                    Produits
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="page-scroll" href="/about">
                    Equipe
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="page-scroll" href="/articles">
                    Articles
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="page-scroll" href="#contact"> */}
                  <Link className="page-scroll" href="/contact">
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
  );
}

export default Navbar;
