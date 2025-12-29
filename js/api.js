const apiKey = import.meta.env.VITE_DOG_API_KEY;

if (!apiKey) {
  document.body.innerHTML =
    "<div style='text-align: center; padding: 30px; margin: 50px; border: 2px solid #e74c3c; background: #fadbd8; border-radius: 8px;'><h2>Error: API key is missing!</h2><p>Please set VITE_DOG_API_KEY in your .env file.</p><p style='font-size: 0.9em; color: #666;'>See README.md for setup instructions.</p></div>";
  throw new Error("API key is missing! Set VITE_DOG_API_KEY in .env");
}

export async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: { "x-api-key": apiKey },
    });
    const data = await response.json();
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
