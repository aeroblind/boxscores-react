import React, { Component } from 'react';
import ScoreTitle from './scoreTitle';
import LineScore from './lineScore';
import Container from '../styled/container';
import FlexBox from '../styled/flexbox';
import * as mlbApi from '../../api/mlbApi';

import BattingSummary from './battingSummary';
import PitchingSummary from './pitchingSummary';
import GameInfo from './gameInfo';
import theme from '../../style/theme';


class BoxScore extends Component {
  constructor(props) {
    super(props);

    this.expandBoxscore = this.expandBoxscore.bind(this);
    this.allowedToExpand = this.allowedToExpand.bind(this);
    this.didClickBoxscore = this.didClickBoxscore.bind(this);

    // this.state = {
    //   boxscore: {},
    //   isLoading: false,
    //   hasBoxscore: false,
    //   isExpanded: props.expand || false,
    //   isEnabled: props.score.status === 'Final',
    // }
  }

  expandBoxscore(e){
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  allowedToExpand(){
    const { hasBoxscore, isEnabled } = this.state;
    if (hasBoxscore && isEnabled) {
      return true
    }
    return false;
  }

  didClickBoxscore(){
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  
  render() {
    const { boxscore } = this.props;
    return (
      <Container
        fontFamily="Georgia" 
        fontSize='10px'
        color={ theme.colors.dark }
        backgroundColor="white"
        margin="8px"
        borderRadius="5px"
        borderColor={theme.colors.medium}
        borderWidth="1px"
        borderStyle="solid"
      > 
        <FlexBox
          alignItems="center"
          flexDirection="row-reverse"
          onClick={this.didClickBoxscore}
        >
          <Container padding="0">
          </Container>
          <Container flexGrow={1} fontSize="14px" padding="0">
            <ScoreTitle
              away_team_name={ boxscore.awayTeamName }
              home_team_name= { boxscore.homeTeamName }
              away_team_runs= { boxscore.linescore.teams.away.runs }
              home_team_runs= { boxscore.linescore.teams.home.runs }
            />
          </Container>
        </FlexBox>
        {/* { isExpanded && hasBoxscore &&
          <Container padding="0" margin="5px 0 0 0">
            <LineScore 
            linescore={ boxscore.linescore }
            home_sname={ boxscore.home_sname }
            away_sname={ boxscore.away_sname }
            />
            <BattingSummary
            batting={ boxscore.batting } 
            away_sname={ boxscore.away_sname }
            home_sname={ boxscore.home_sname }
            />
            <PitchingSummary
              pitching={ boxscore.pitching } 
              away_sname={ boxscore.away_sname }
              home_sname={ boxscore.home_sname }
            />
            <GameInfo
              gameInfo={ boxscore.game_info } 
              away_sname={ boxscore.away_sname }
              home_sname={ boxscore.home_sname }
            />
          </Container>
          } */}
      </Container>
    )
  }
}

export default BoxScore;
