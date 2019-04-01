import React from 'react';
import ScoreTitle from './scoreTitle';

const BoxScore = ({data}) => {
  console.log(data);
  return (
    <ScoreTitle
      away_fname={ data.away_fname }
      home_fname= { data.home_fname }
      away_team_runs= { data.linescore.away_team_runs }
      home_team_runs= { data.linescore.home_team_runs }
    />
  )
}

export default BoxScore;
