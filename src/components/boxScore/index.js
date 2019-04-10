import React, { Component } from 'react';
import ScoreTitle from './scoreTitle';
import LineScore from './lineScore';
import Container from '../styled/container';
import FlexBox from '../styled/flexbox';
import * as mlbApi from '../../api/mlbApi';

import BattingSummary from './battingSummary';
import PitchingSummary from './pitchingSummary';
import GameInfo from './gameInfo';


class BoxScore extends Component {
  constructor(props) {
    super(props);
    this.getBoxScore = this.getBoxScore.bind(this);
    this.expandBoxscore = this.expandBoxscore.bind(this);

    this.state = {
      boxscore: {},
      isLoading: false,
      hasBoxscore: false,
      isExpanded: this.props.expand || false,
    }
  }

  componentDidMount() {
    const { score, date } = this.props;
    this.getBoxScore(score.gameday_link, date);
  }
  
  async getBoxScore(gamedayLink, date) {
    this.setState({
      isLoading: true,
    })
    const boxscore = await mlbApi.getBoxScoreOnDate(date, gamedayLink);
    this.setState({
      boxscore,
      hasBoxscore: true,
      isLoading: false,
    });
  }

  expandBoxscore(e){
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  render() {
    const { score } = this.props;
    const { boxscore, hasBoxscore, isLoading, isExpanded  } = this.state;
    return (
      <Container
        fontFamily="Georgia" 
        fontSize='10px'
        backgroundColor="white"
        margin="8px"
        borderRadius="5px"
      > 
        <FlexBox
          alignItems="center"
          flexDirection="row-reverse"
        >
          <Container padding="0">
            <button disabled={!hasBoxscore} type="button" onClick={this.expandBoxscore}> V </button>
          </Container>
          <Container flexGrow={1} fontSize="14px" padding="0">
            <ScoreTitle
              away_team_name={ score.away_team_name }
              home_team_name= { score.home_team_name }
              away_team_runs= { score.away_team_runs }
              home_team_runs= { score.home_team_runs }
            />
          </Container>
        </FlexBox>
        {}
        { isExpanded && hasBoxscore &&
          <div>
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
          </div>
        }
      </Container>
    )
  }
}

export default BoxScore;
