import { APIKey, baseUrl } from "./constants";

const requestOptions = {
  headers: {
    Authorization: `Client-ID ${APIKey}`,
    Accept: "application/json",
  },
};

export async function getPhotos() {
  try {
    const response = await fetch(`${baseUrl}photos?per_page=10`, requestOptions);

    if (!response.ok) {
      console.error(`API call error. Status: ${response.status}`);
      throw new Error("Failed to fetch photos from Unsplash API");
    }

    const data = await response.json();
    console.log("Photos successfully retrieved from API:", data);

    return data;
  } catch (error) {
    console.error("Error during the API call:", error);
    throw error;
  }
}
