const qs = require('qs');
const dotenv = require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

console.log("API Key from .env: ", process.env.OPENAI_KEY);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);



module.exports = async function(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const dish = req.body.dish || '';
  if (dish.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid dish",
      }
    });
    return;
  }

  try {
    const completion = await 	openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Return a JSON object as a recipe for a dish split into two arrays: "ingredients" and "steps". If an ingredient has multiple options, only select one. Each ingredient should be an object with an ingredient property listing only the name of that ingredient with no numbers, and an amount property listing the amount of that ingredient needed. The steps should not begin with a number',
        },
        {
          role: 'user',
          content: `Suggest a recipe for ${dish}`,
        },
    ],
      temperature: 0.6,
    });
    res.status(200).json({result: JSON.parse(completion.data.choices[0].message.content)});
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
};
