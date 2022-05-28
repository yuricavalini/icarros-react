import axios from 'axios';

const baseURL = 'https://webhook.site/ce4f51ca-5e4f-4472-b362-7512572e0ff1';

export const api = axios.create({
  baseURL: baseURL,
});
