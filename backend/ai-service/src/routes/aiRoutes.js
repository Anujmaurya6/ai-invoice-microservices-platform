const router = require("express").Router();
const axios = require("axios");

router.post("/generate", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text }]
          }
        ]
      }
    );

    const output =
      response.data.candidates[0].content.parts[0].text;

    res.json({
      success: true,
      result: output
    });

  } catch (err) {
    console.log("❌ Gemini ERROR:", err.response?.data || err.message);

    res.status(500).json({
      error: err.response?.data || err.message
    });
  }
});

module.exports = router;