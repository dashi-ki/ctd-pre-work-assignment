const apiKey = "YOUR_API_KEY_HERE";

if (apiKey === "YOUR_API_KEY_HERE") {
  document.body.innerHTML =
    "<h2>Error: API key is missing!</h2><br><p>Please populate provided API key in config.js instead of placeholder.</p>";
  throw new Error(
    "API key is missing! Need to use valid The Dog API key in order to use the application"
  );
}
