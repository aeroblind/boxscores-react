import React, {Component} from 'react';
import BoxScore from '../../components/boxScore';
import FlexBox from '../../components/styled/flexbox';
import Container from '../../components/styled/container';
import moment from 'moment';
//  import fakeData from '../../../fakeData.json';
import * as mlbApi from '../../api/mlbApi';

class Home extends Component {
  constructor(props) {
    super(props);

    this.getGameScores = this.getGameScores.bind(this);
    this.displayBoxScores = this.displayBoxScores.bind(this);
    this.isLoading = this.isLoading.bind(this);

    this.state = {
      isLoading: false,
      scores: [],
      date: this.getDate(1),
    }
  }

  componentDidMount(){
    this.getGameScores(this.state.date);
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

  displayBoxScores() {
    const elements = [];
    this.state.scores.map((score, index) => {
      elements.push(
        <div key={index} style={{width: '100%'}}>
          <BoxScore
            score={score}
            date={this.state.date}
          />
        </div>
      )
    })
    return elements;
  }

  render() {
    const { isLoading } = this.state;
    return (
      <Container padding='0'>
        <FlexBox
          flexDirection="column"
          alignItems="center">
          { isLoading ?
            <div>Loading...</div> : this.displayBoxScores() 
          }
        </FlexBox>
      </Container>
    )
  }
}

export default Home;