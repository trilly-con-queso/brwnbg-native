import axios from 'axios';
import qs from 'qs';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";



const getCart = async function (ingredients) {
  let data = {
    'ingredients': ingredients
  }

  let options = {
    method: 'POST',
    url: 'https://www.amazon.com/afx/ingredients/landing',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data)
  }
  try {
    return axios(options);
  } catch(err) {
    return err;
  }
};