"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "../_lib/utils";
import Image from "next/image";
import newlogoInterlink from "/public/4.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
export const menuItems = [
  {
    label: "Accueil",
    href: "/",
    items: [],
  },
  {
    label: "Services",
    href: "/services",
    items: [],
  },
  {
    label: "Nos Offres",
    href: "/pricing",
    items: [
      {
        title: "Accessibilité et Mobilité",
        href: "/pricing",
        description:
          "L'offre SaaS permet un accès instantané aux services depuis n'importe quel endroit, favorisant la mobilité des utilisateurs et garantissant une disponibilité universelle.",
      },
      {
        title: "Simplicité Opérationnelle",
        href: "/pricing",
        description:
          "Élimination des complexités liées à l'installation et à la maintenance locales, avec des mises à jour automatiques qui simplifient la gestion quotidienne.",
      },
      {
        title: "Économies de Coûts et Évolutivité ",
        href: "/pricing",
        description:
          " Réduction des coûts d'infrastructure initiaux, avec la capacité d'ajuster les ressources en fonction des besoins pour une solution économique et évolutive.",
      },
    ],
  },
  {
    label: "Produits",
    href: "/products",
    items: [],
  },
  {
    label: "A propos",
    href: "/about",
    items: [],
  },
  {
    label: "Articles",
    href: "/article",
    items: [],
  },
  {
    label: "Contact",
    href: "/contact",
    items: [],
  },
  // {
  //   label: "Nos Offres",
  //   href: "/pricing",
  //   items: [
  //     {
  //       title: "Accessibilité et Mobilité",
  //       href: "/pricing",
  //       description:
  //         "L'offre SaaS permet un accès instantané aux services depuis n'importe quel endroit, favorisant la mobilité des utilisateurs et garantissant une disponibilité universelle.",
  //     },
  //     {
  //       title: "Simplicité Opérationnelle",
  //       href: "/pricing",
  //       description:
  //         "Élimination des complexités liées à l'installation et à la maintenance locales, avec des mises à jour automatiques qui simplifient la gestion quotidienne.",
  //     },
  //     {
  //       title: "Économies de Coûts et Évolutivité ",
  //       href: "/pricing",
  //       description:
  //         " Réduction des coûts d'infrastructure initiaux, avec la capacité d'ajuster les ressources en fonction des besoins pour une solution économique et évolutive.",
  //     },
  //   ],
  // },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:!flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Image
          src={newlogoInterlink}
          alt="Logo Interlink"
          priority
          // placeholder="blur"
          style={{ height: "100%" }}
        />
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((item, index) =>
              item.items.length > 0 ? (
                // <NavigationMenu  className="!w-full ">
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={cn(
                      pathname === item.href && "text-accent-hover"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {item.items.map((subItem, index) => (
                        <ListItem
                          href={subItem.href}
                          title={subItem.title}
                          key={index}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                // </NavigationMenu>
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        pathname === item.href && "text-accent-hover",
                        navigationMenuTriggerStyle(),
                        "hover:scale-110 hover:font-bold transition-all ease-in-out"
                      )}
                      active={pathname === item.href}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}
const ListItem = React.forwardRef(function ListItem(
  { className, title, children, ...props },
  ref
) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
