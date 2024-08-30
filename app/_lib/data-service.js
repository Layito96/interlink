import axios from "axios";

// const BASE_URL = "http://localhost:1338/api";
const BASE_URL = "https://cms-interlink.onrender.com/api";

const POPULATE_PARAMAS = "?populate=*";

// axios.get('/user?ID=12345')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .finally(function () {
//         // always executed
//     });

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
