console.log("api is loaded");
const apiKey = configApiKey;

async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: { "x-api-key": apiKey },
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log("Error Fetching Breeds Info");
    return [];
  }
}

async function fetchBreedForQuiz() {
  try {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=3",
      {
        headers: { "x-api-key": apiKey },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error Fetching Random Breeds with Images");
    return [];
  }
}
