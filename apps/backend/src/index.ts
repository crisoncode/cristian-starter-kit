import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const cristian = "Cristian";
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
