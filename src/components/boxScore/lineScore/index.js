import React from 'react';

import FlexBox from '../../styled/flexbox';

const LineScore = ({ linescore, home_team_code, away_team_code }) => {
  
  const { 
    inning_line_score,
    away_team_hits,
    away_team_runs,
    away_team_errors,
    home_team_runs,
    home_team_hits,
    home_team_errors,
  } = linescore;

  const isThirdColumn = (index) => {
    return index % 3 === 0;
  };

  const listInnings = inning_line_score.map((inning, index) => (
    <FlexBox 
      key={index} 
      margin={isThirdColumn(index + 1) ? '0 5px 0 0' : '0'}
      flexDirection="column">
        <span>{ inning.away }</span>
        <span>{ inning.home }</span>
    </FlexBox>
  ));
  

  return (
    <div>
      <hr style={{margin: '0 0 3px 0'}}/>
      <FlexBox>
        <FlexBox flexGrow={1} flexDirection="column">
          <span>{ away_team_code.toUpperCase() }</span>
          <span>{ home_team_code.toUpperCase() }</span>
        </FlexBox>
        <FlexBox justifyContent="flex-end" flexGrow={2}>
          <FlexBox>
            { listInnings }
          </FlexBox>
          <FlexBox flexDirection="column" margin={'0 5px 0 0'}>
            <span>-</span>
            <span>-</span>
          </FlexBox>
          <FlexBox>
            <FlexBox flexDirection="column" margin={'0 5px 0 0'}>
              <span>{away_team_runs}</span>
              <span>{home_team_runs}</span>
            </FlexBox>
            <FlexBox flexDirection="column" margin={'0 5px 0 0'}>
              <span>{away_team_hits}</span>
              <span>{home_team_hits}</span>
            </FlexBox>
            <FlexBox flexDirection="column">
              <span>{away_team_errors}</span>
              <span>{home_team_errors}</span>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <hr style={{margin: '3px 0 0 0'}}/>
    </div>
  )
}

export default LineScore;