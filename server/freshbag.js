const axios = require('axios');
const { JSDOM } = require("jsdom");

module.exports = async function(req, res) {
  try {
    const response = await axios.post("https://www.amazon.com/afx/ingredients/landing",
    req.body,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "http://localhost:3000",
        "Referer": "http://localhost:3000"
      }
    }
    );
    const dom = new JSDOM(response.data);
    const element = dom.window.document.getElementById("afx-ingredients-data");
    const encodedRecipeUrl = element.getAttribute("data-encoded-recipe-url");
    res.send(encodedRecipeUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'There was an error processing your request.' });
  }
};