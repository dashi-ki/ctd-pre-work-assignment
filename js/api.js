const apiKey = import.meta.env.VITE_DOG_API_KEY;

if (!apiKey) {
  document.body.innerHTML =
    "<h2>Error: API key is missing!</h2><br><p>Please set VITE_DOG_API_KEY in your .env file.</p>";
  throw new Error("API key is missing! Set VITE_DOG_API_KEY in .env");
}

export async function fetchBreeds() {
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

export async function fetchBreedForQuiz() {
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
