const configApiKey = "live_XXX";

if (configApiKey === "live_XXX") {
  document.body.innerHTML =
    "<h1>Error: API key is missing!</h1><p>Please populate provided API key in config.js instead of placeholder live_XXX</p>";
  throw new Error(
    "API key is missing! Please populate provided API key in config.js instead of placeholder"
  );
}
