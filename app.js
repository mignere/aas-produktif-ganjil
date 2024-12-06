const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Server Static Application Folder
app.use(express.static(path.join(__dirname, "static")));

// Server index.html as default file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

// Run The Application
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
