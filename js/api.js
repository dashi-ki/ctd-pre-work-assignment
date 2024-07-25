console.log("api is loaded");
async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = response.json();
    return data;
  } catch (error) {
    console.log("Error Fetching Breeds Info");
    return [];
  }
}
