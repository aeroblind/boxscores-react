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


class Boxscore extends Component {
  constructor(props) {
    super(props);

    this.expandBoxscore = this.expandBoxscore.bind(this);
    this.allowedToExpand = this.allowedToExpand.bind(this);
    this.didClickBoxscore = this.didClickBoxscore.bind(this);

    this.state = {
      isExpanded: props.expand || false,
      isEnabled: props.score.status === 'Final',
    }
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
    const { score } = this.props;
    const { isExpanded } = this.state;
    //console.log(score.pitchingAndGameInfo);
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
          <Container flexGrow={1} fontSize="14px" padding="0">
            <ScoreTitle
              away_team_name={ score.awayTeamName }
              home_team_name= { score.homeTeamName }
              away_team_runs= { score.linescore.teams.away.runs }
              home_team_runs= { score.linescore.teams.home.runs }
            />
          </Container>
        </FlexBox>
        { isExpanded &&
          <Container padding="0" margin="5px 0 0 0">
            <LineScore 
              linescore={ score.linescore }
              home_sname={ score.homeShortName }
              away_sname={ score.awayShortName }
            />
            <BattingSummary
              awayBatters = { score.awayBatters }
              homeBatters = { score.awayBatters }
              away_sname={ score.awayShortName }
              home_sname={ score.homeShortName }
              fieldingAndBattingInfo={ score.fieldingAndBattingInfo }
            />
            <PitchingSummary
              awayPitchers={ score.awayPitchers } 
              homePitchers={ score.homePitchers } 
              away_sname={ score.awayShortName }
              home_sname={ score.homeShortName }
            />
            
            <GameInfo
              gameInfo={ score.pitchingAndGameInfo }
            />
          </Container>
          }
      </Container>
    )
  }
}

export default Boxscore;
