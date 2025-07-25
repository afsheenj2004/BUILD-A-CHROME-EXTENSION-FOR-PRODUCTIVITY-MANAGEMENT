const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/track", (req, res) => {
  const { site, timeSpent } = req.body;
  console.log(`Visited: ${site} | Time spent: ${timeSpent}s`);
  res.status(200).json({ message: "Tracked successfully" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
