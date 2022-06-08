import axios from 'axios';

const baseURL = 'https://webhook.site/9305c99c-efed-43ef-bcf5-3badb5220797';

export const api = axios.create({
  baseURL: baseURL,
});

export const authAPI = axios.create({
  baseURL: 'https://sistemadeagendamentogama.herokuapp.com/',
});
