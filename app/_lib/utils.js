import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// STRAPI URL
// export const STRAPI_URL = "https://cms-interlink.onrender.com";
export const STRAPI_URL = "http://localhost:1338";

// Google Map URL
export const mapURL =
  "https://maps.google.com/maps?q=wimex%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed";
