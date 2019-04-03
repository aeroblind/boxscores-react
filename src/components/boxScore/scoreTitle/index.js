import React from 'react';
import styled from 'styled-components';

const ScoreTitleText = styled.span`
  font-size: 16px;
`;

const ScoreTitle = ({away_fname, home_fname, away_team_runs, home_team_runs}) => {
 
  const getScoreTitle = () => {
    var scoreTitle = '';
    if(away_team_runs > home_team_runs) {
      scoreTitle = `${away_fname} ${away_team_runs}, ${home_fname} ${home_team_runs} `
    } else {
      scoreTitle = `${home_fname} ${home_team_runs}, ${away_fname} ${away_team_runs} `
    }
    return <ScoreTitleText><b>{scoreTitle}</b></ScoreTitleText>
  };

  return (
    <div>{getScoreTitle()}</div>
  )
}

export default ScoreTitle;