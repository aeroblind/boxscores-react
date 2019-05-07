import axios from 'axios';
import mlb from '../models/mlb';

const baseUrl = 'https://boxsco-mound-prod.appspot.com/api';

export function getBoxscoresByDate(date) {
  const url = `${baseUrl}/mlb?date=${date}`;
  return axios.get(url)
  .then(response => { return response.data.boxscores })
}