// Central entry point for the Dog Breeds application
// Imports and initializes all modules with proper order:
// 1. API module (handles env vars and fetch)
// 2. UI builders (DOM element creators)
// 3. Groups module (depends on UI builders)
// 4. Quiz module (depends on API and sets up its own DOMContentLoaded)
// 5. App module (main initialization and navigation)

import "./api.js"; // Initialize API (validates env var)
import "./ui_builder.js"; // Register UI builders
import "./groups.js"; // Register group handlers
import "./quiz.js"; // Register quiz and its DOMContentLoaded
import "./app.js"; // Start main app
