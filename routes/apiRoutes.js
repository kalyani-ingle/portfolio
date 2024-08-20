const express = require("express");
const Users = require("../Models/User");
const router = express.Router();

// hit the API endpoint to submit contact form
router.post("/contact", async (req, res) => {
  try {
    req.body.timestamp = Date.now();
    let user = await new Users(req.body);
    let result = await user.save();
    console.log(result);
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    return res
      .status(500)
      .json({ error: "Message could not be sent. Try again!" });
  }
});

module.exports = router;
