import axios from 'axios';

const baseUrl = 'https://gd2.mlb.com/components/game/mlb';

const getGamesUrls = (games) => {
  return games.map(game => game.gameday_link)
}

export function getMiniScoreboardOnDate({year, month, day}) {
  const url = `${baseUrl}/year_${year}/month_${month}/day_${day}/miniscoreboard.json`;
  return axios.get(url)
}

export function getAllBoxScoresOnDate({year, month, day}) {
  return getMiniScoreboardOnDate({year, month, day})
    .then(response => {
      const gamesUrls = getGamesUrls(response.data.data.games.game);
      const promises = gamesUrls.map(partialUrl => {
        return axios.get(`${baseUrl}/year_${year}/month_${month}/day_${day}/gid_${partialUrl}/boxscore.json`);
      });
      return Promise.all(promises)
    })
    .then(responses => {
      return responses.map(response => response.data.data.boxscore);
    })
    .catch(err => console.log(err));
}