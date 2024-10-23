import axios from "axios";

// BASE_URL is the URL of the Strapi API in development
// const BASE_URL = "http://localhost:1338/api";

// BASE_URL is the URL of the Strapi API in production
const BASE_URL = "https://cms-interlink.onrender.com/api";

// POPULATE_PARAMAS is a query string that tells Strapi to populate all related data
const POPULATE_PARAMAS = "?populate=*";

const getMembers = () => axios.get(`${BASE_URL}/members${POPULATE_PARAMAS}`);
const getServices = () => axios.get(`${BASE_URL}/services${POPULATE_PARAMAS}`);
const getProducts = () => axios.get(`${BASE_URL}/products${POPULATE_PARAMAS}`);
const getReferences = () =>
  axios.get(`${BASE_URL}/references${POPULATE_PARAMAS}`);
const getTestimonials = () =>
  axios.get(`${BASE_URL}/testimonials${POPULATE_PARAMAS}`);
const getValues = () => axios.get(`${BASE_URL}/values${POPULATE_PARAMAS}`);
export {
  BASE_URL,
  POPULATE_PARAMAS,
  getMembers,
  getServices,
  getProducts,
  getReferences,
  getTestimonials,
  getValues,
};
