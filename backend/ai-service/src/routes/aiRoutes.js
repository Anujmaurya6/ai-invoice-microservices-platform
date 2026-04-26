const router = require("express").Router();
const axios = require("axios");

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      }
    );

    const text =
      response.data.candidates[0].content.parts[0].text;

    res.json({ result: text });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;