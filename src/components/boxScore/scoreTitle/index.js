import React from 'react';
import abstractGameCodes from '../../../models/abstractGameCodes';
import theme from '../../../style/theme';

const ScoreTitle = ({awayTeamName, homeTeamName, awayTeamRuns, homeTeamRuns, gameStatus}) => {
 
  const getScoreTitle = () => {
    var element;
    if (gameStatus === abstractGameCodes.final || gameStatus === abstractGameCodes.live) {
      var scoreTitle = '';
      if(awayTeamRuns > homeTeamRuns) {
        scoreTitle = `${awayTeamName} ${awayTeamRuns}, ${homeTeamName} ${homeTeamRuns}`;
      } else {
        scoreTitle = `${homeTeamName} ${homeTeamRuns}, ${awayTeamName} ${awayTeamRuns}`;
      }
      element = <span><b>{scoreTitle}</b></span>;
    } else {
      element = <span><b>{awayTeamName}</b><span style={{color: theme.colors.medium}}> @ </span><b>{homeTeamName}</b></span>;
    }
    return element;
  };

  return (
    <div>{getScoreTitle()}</div>
  )
}

export default ScoreTitle;