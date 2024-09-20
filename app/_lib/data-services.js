// const BASE_URL = "http://localhost:1338/api";
const BASE_URL = "https://cms-interlink.onrender.com/api";

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
    //console.log(data); // You can remove this in production

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
    //console.log(data); // You can remove this in production

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
    //console.log(data); // You can remove this in production

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
    //console.log(data); // You can remove this in production

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
    // console.log("articles data:", data); // Log the received data
    return data;
  } catch (error) {
    console.error("Fetch articles error:", error);
    return { data: [] }; // Ensure the return type matches the expected structure
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
    console.log(data); // You can remove this in production

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
    const url = `${BASE_URL}/works${POPULATE_PARAMAS}`;

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
