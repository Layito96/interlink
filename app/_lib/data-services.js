import { STRAPI_URL } from "./utils";

// BASE_URL is the URL of the Strapi API in development
// const BASE_URL = "http://localhost:1338/api";

// BASE_URL is the URL of the Strapi API in production
const BASE_URL = `${STRAPI_URL}/api`;

// POPULATE_PARAMAS is a query string that tells Strapi to populate all related data
const POPULATE_PARAMAS = "?populate=*&pagination[pageSize]=10";

export async function getMembers() {
  try {
    const response = await fetch(`${BASE_URL}/Products${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching members");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getTestimonials() {
  try {
    const response = await fetch(
      `${BASE_URL}/Testimonials${POPULATE_PARAMAS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching testimonials");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getServices() {
  try {
    const response = await fetch(`${BASE_URL}/Services${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching services");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getReferences() {
  try {
    const response = await fetch(`${BASE_URL}/References${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching references");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getValues() {
  try {
    const response = await fetch(`${BASE_URL}/Values${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching values");
    }

    const data = await response.json();
    //console.log("values data", data); // You can remove this in production

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getArticles() {
  try {
    const url = `${BASE_URL}/Blogs${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching articles");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch articles error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getLastArticles() {
  try {
    const url = `${BASE_URL}/Blogs${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching articles");
    }

    const data = await response.json();

    // Assurez-vous que `data` contient un tableau dans `data.data`
    const articles = data?.data || [];

    // Trier les articles par date de création (ou un autre champ pertinent)
    const sortedArticles = articles.sort((a, b) => {
      const dateA = new Date(a.attributes.createdAt);
      const dateB = new Date(b.attributes.createdAt);
      return dateB - dateA; // Trier par ordre décroissant (plus récent d'abord)
    });

    // Récupérer les trois derniers
    const latestArticles = sortedArticles.slice(0, 3);

    return latestArticles;
  } catch (error) {
    console.error("Fetch articles error:", error);
    return { data: [] }; // Garantir la compatibilité avec le reste de l'application
  }
}

export async function getArticle(id) {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${id}${POPULATE_PARAMAS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching articles");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch articles error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getAbout() {
  try {
    const url = `${BASE_URL}/about${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching about");
    }

    const data = await response.json();
    // console.log("About data:", data.data); // Log the received data
    return data;
  } catch (error) {
    console.error("Fetch articles error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getWorks() {
  try {
    const url = `${BASE_URL}/Works${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching ");
    }

    const data = await response.json();
    // console.log("About data:", data.data); // Log the received data
    return data;
  } catch (error) {
    console.error("Fetch  error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getProducts() {
  try {
    const url = `${BASE_URL}/Products${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching ");
    }

    const data = await response.json();
    // console.log("About data:", data.data); // Log the received data
    return data;
  } catch (error) {
    console.error("Fetch  error:", error);
    console.warn("Fetch  error:");
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

// export async function getProductsByID
export async function getProductsByID(id) {
  try {
    const url = `${BASE_URL}/Products/${id}${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching product by ID");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getHebergementSaasDesciption() {
  try {
    const url = `${BASE_URL}/hebergement-saas-desciption${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching hebergement saas desciption");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch hebergement-saas-desciption error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getHebergementsSaas() {
  try {
    const response = await fetch(
      `${BASE_URL}/hebergements-saas${POPULATE_PARAMAS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching hebergement-saas:", response.statusText);
      throw new Error("Error fetching hebergement-saas");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function getHebergementLocaleDesciption() {
  try {
    const url = `${BASE_URL}/hebergement-local-desciption${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error(
        "Error fetching hebergement-local-desciption saas desciption"
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch hebergement-locale-desciption error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getHebergementsLocale() {
  try {
    const response = await fetch(
      `${BASE_URL}/hebergements-locals${POPULATE_PARAMAS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      // Handle the error if the response is not OK
      console.error("Error fetching hebergements-local:", response.statusText);
      throw new Error("Error fetching hebergement-local");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}
export async function getTarification() {
  try {
    const url = `${BASE_URL}/tarification${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching tarification saas desciption");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch tarification error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getHebergement() {
  try {
    const url = `${BASE_URL}/hebergement${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching hebergement");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch hebergement error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}

export async function getHistoriques() {
  try {
    const url = `${BASE_URL}/histoires${POPULATE_PARAMAS}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      throw new Error("Error fetching histoires");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch histoires error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
  }
}
