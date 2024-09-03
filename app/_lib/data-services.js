// const BASE_URL = "http://localhost:1338/api";
const BASE_URL = "https://cms-interlink.onrender.com/api";

const POPULATE_PARAMAS = "?populate=*";

export async function getMembers() {
  try {
    const response = await fetch(`${BASE_URL}/products${POPULATE_PARAMAS}`, {
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
      `${BASE_URL}/testimonials${POPULATE_PARAMAS}`,
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
    const response = await fetch(`${BASE_URL}/services${POPULATE_PARAMAS}`, {
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
    const response = await fetch(`${BASE_URL}/references${POPULATE_PARAMAS}`, {
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
    const response = await fetch(`${BASE_URL}/values${POPULATE_PARAMAS}`, {
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
    //console.log(data); // You can remove this in production

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    return []; // Return an empty array or handle the error as needed
  }
}
