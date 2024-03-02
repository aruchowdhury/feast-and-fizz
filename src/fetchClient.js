export default async function fetchWithMealURL(endpoint, options = {}) {
  try {
    const baseURL = "https://www.themealdb.com/api/json/v1/1/";
    const fullURL = new URL(endpoint, baseURL);

    // Merge base options for all requests
    const defaultOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const mergedOptions = { ...defaultOptions, ...options };

    const response = await fetch(fullURL, mergedOptions);

    // Handle errors
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
