import React from 'react';
import ScoreTitle from './scoreTitle';
import LineScore from './lineScore';
import Container from '../styled/container';

import BattingSummary from './battingSummary';
import PitchingSummary from './pitchingSummary';
import GameInfo from './gameInfo';


const BoxScore = ({data, width}) => { 
  return (
    <Container fontFamily="Georgia" fontSize='10px'>
      <ScoreTitle
        away_fname={ data.away_fname }
        home_fname= { data.home_fname }
        away_team_runs= { data.linescore.away_team_runs }
        home_team_runs= { data.linescore.home_team_runs }
      />
      <LineScore 
        linescore={ data.linescore }
        home_sname={ data.home_sname }
        away_sname={ data.away_sname }
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
      <GameInfo
        gameInfo={ data.game_info } 
        away_sname={ data.away_sname }
        home_sname={ data.home_sname }
      />
    </Container>
  )
}

export default BoxScore;
