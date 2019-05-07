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
    
    this.getBoxscoresByDate = this.getBoxscoresByDate.bind(this);
    this.getGameScores = this.getGameScores.bind(this);
    this.isLoading = this.isLoading.bind(this);
    this.deviceDidChangeSize = this.deviceDidChangeSize.bind(this);
    this.state = {
      isLoading: false,
      scores: [],
      scoreMatrix: [],
      date: this.getDate(1),
      deviceSize: props.deviceSize,
      expandBoxscores: false,
    }
  }

  shouldComponentUpdate(nextProps, _) {
    const { deviceSize } = this.props;
    if (nextProps.deviceSize !== deviceSize) {
      this.deviceDidChangeSize(nextProps.deviceSize);
    }
    return true;
  }

  async componentDidMount(){
    //  this.getBoxscoresByDate();
    //  await this.getGameScores(this.state.date);
    this.deviceDidChangeSize(this.props.deviceSize);
  }

  getBoxscoresByDate(){
    const { getBoxscoresByDate } = this.props;
    getBoxscoresByDate('05/07/2019');
  }
  deviceDidChangeSize(size) {
    const { scores } = this.state;
    let localScores = []
    let mod = 1;
    let shouldExpandBoxscores = false;

    if (size === devices.mediumDevices.name) {
      mod = 2
    } else if (size === devices.largeDevices.name) {
      shouldExpandBoxscores = true;
      mod = 3
    }

    for (var i=0; i<= mod-1; i++) {
      localScores.push([]);
    };

    scores.map((score, index) => {
      localScores[index % mod].push(score);
    })

    this.setState({
      scoreMatrix: localScores,
      expandBoxscores: shouldExpandBoxscores,
    })
  }

  getDate(daysFromToday) {
    const yesterday = moment().subtract(daysFromToday.toString(), 'day');
    return {
      year: yesterday.format('YYYY'),
      month: yesterday.format('MM'),
      day: yesterday.format('DD'),
    }
  }

  isLoading(state) {
    this.setState({
      isLoading: state
    })
  }

  async getGameScores(date) {
    const scores = await mlbApi.getMiniScoreboardOnDate(date);
    this.setState({
      scores,
      isLoading: false,
      date: date,
    });
  }



  render() {
    const { isLoading, scoreMatrix, date, expandBoxscores } = this.state;
    const { boxscores } = this.props;
    return (
      <Container padding='0' margin="auto">
        {boxscores.length > 0 && 
          <Scoreboard
            boxscores={boxscores}
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
