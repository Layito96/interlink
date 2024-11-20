"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";
import newlogoInterlink from "/public/4.svg";
function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Nos Offres",
      href: "/pricing",
    },
    {
      label: "Produits",
      href: "/products",
    },
    {
      label: "A propos",
      href: "/about",
    },
    {
      label: "Articles",
      href: "/article",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

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
              onClick={toggleMenu}
            >
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
            </button>

            <div
              className={`navbar-collapse lg:items-center lg:justify-center openMenu ${
                openMenu ? "" : "hidden"
              }   lg:block duration-300 shadow absolute top-full left-0 mt-2 bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                <li className="nav-item">
                  <Link className="page-scroll active" href="#hero-area">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="page-scroll" href="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="page-scroll" href="/pricing">
                    Nos Offres
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="page-scroll" href="/products">
                    Produits
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="page-scroll" href="/about">
                    A propos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="page-scroll" href="/article">
                    Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="page-scroll" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* <!-- Navbar End --> */}
    </header>
  );
}

export default Navbar;
