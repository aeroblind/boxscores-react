import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Container from '../../components/styled/container';
import moment from 'moment';
import Scoreboard from '../../components/scoreboard';
import * as mlbApi from '../../api/mlbApi';
import * as mlbActions from '../../_actions/mlbActions';
import devices from '../../util/devices';

class Home extends Component {
  constructor(props) {
    super(props);
    const { boxscores, isMobile } = props;
    this.state = {
      scoresMatrix: this.getScoresMatrix(boxscores, isMobile)
    }
  }

  getScoresMatrix(scores, isMobile) {
    let scoresMatrix = []
    let mod = 1;

    if (!isMobile) {
      mod = 3
    }
      
    for (var i=0; i<= mod-1; i++) {
      scoresMatrix.push([]);
    };

    scores.map((score, index) => {
      scoresMatrix[index % mod].push(score);
    })

    return scoresMatrix;
  }

  getBoxscoresByDate(){
    const { getBoxscoresByDate } = this.props;
    getBoxscoresByDate('05/07/2019');
  }


  render() {
    const { scoresMatrix } = this.state;
    const { boxscores } = this.props;
    return (
      <Container padding='0' margin="auto">
        {boxscores.length > 0 && 
          <Scoreboard
            scoresMatrix={scoresMatrix}
            expandBoxscores={!this.props.isMobile}
          />
        }
      </Container>
    )
  }
}

// function mapStateToProps(state, ownProps) {
//   return {
//     deviceSize: state.app.deviceSize,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     getBoxscoresByDate: (date) => dispatch(mlbActions.getBoxscoresByDate(date)),
//   };
// }

export default Home;//withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
