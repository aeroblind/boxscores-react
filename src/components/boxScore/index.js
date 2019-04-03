import React from 'react';
import ScoreTitle from './scoreTitle';
import LineScore from './lineScore';
import Container from '../styled/container';
import BattingSummary from './battingSummary';
import PitchingSummary from './pitchingSummary';

const BoxScore = ({data}) => {
  return (
    <Container>
      <ScoreTitle
        away_fname={ data.away_fname }
        home_fname= { data.home_fname }
        away_team_runs= { data.linescore.away_team_runs }
        home_team_runs= { data.linescore.home_team_runs }
      />
      <LineScore 
        linescore={ data.linescore }
        home_team_code={ data.home_team_code }
        away_team_code={ data.away_team_code }
      />
      <BattingSummary
        batting={ data.batting } 
        away_sname={ data.away_sname }
        home_sname={ data.home_sname }
      />
      <PitchingSummary
        pitching={ data.pitching } 
        away_sname={ data.away_sname }
        home_sname={ data.home_sname }
      />
    </Container>
  )
}

export default BoxScore;
