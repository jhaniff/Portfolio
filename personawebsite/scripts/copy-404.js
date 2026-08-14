const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
fs.copyFileSync(path.join(buildDir, "index.html"), path.join(buildDir, "404.html"));
process.stdout.write("Copied build/index.html → build/404.html\n");
