const express = require("express");
const app = express();

// linking the url with the react app.Thats it.
app.get("/test/jobs/", (req, res) => {
  res.redirect("http://localhost:3000/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
