import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// STRAPI URL
export const STRAPI_URL = "https://cms-interlink.onrender.com";
// export const STRAPI_URL = "http://localhost:1338";

// Google Map URL
export const mapURL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.3939918222383!2d-15.9656349!3d18.096938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe96529b45e8bb57%3A0x5cc8e86d64766358!2sWIMEX!5e0!3m2!1sen!2sus!4v1698052945832!5m2!1sen!2sus";
