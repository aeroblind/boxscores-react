import React from 'react';
import abstractGameCodes from '../../../models/abstractGameCodes';

const ScoreTitle = ({awayTeamName, homeTeamName, awayTeamRuns, homeTeamRuns, gameStatus}) => {
 
  const getScoreTitle = () => {
    var scoreTitle = '';
    if (gameStatus === abstractGameCodes.final || gameStatus === abstractGameCodes.live) {
      if(awayTeamRuns > homeTeamRuns) {
        scoreTitle = `${awayTeamName} ${awayTeamRuns}, ${homeTeamName} ${homeTeamRuns}`
      } else {
        scoreTitle = `${homeTeamName} ${homeTeamRuns}, ${awayTeamName} ${awayTeamRuns}`
      }
    } else {
      scoreTitle = `${awayTeamName} vs ${homeTeamName}`
    }
    return <span><b>{scoreTitle}</b></span>
  };

  return (
    <div>{getScoreTitle()}</div>
  )
}

export default ScoreTitle;