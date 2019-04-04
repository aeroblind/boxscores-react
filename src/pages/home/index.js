import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import BoxScore from '../../components/boxScore';
import FlexBox from '../../components/styled/flexbox';
import moment from 'moment';
//  import fakeData from '../../../fakeData.json';
import * as mlbApi from '../../api/mlbApi';

class Home extends Component {
  constructor(props) {
    super(props);

    this.getBoxScores = this.getBoxScores.bind(this);
    this.displayBoxScores = this.displayBoxScores.bind(this);

    this.state = {
      isLoading: false,
      boxscores: [],
    }
  }
  componentDidMount(){
    this.getBoxScores();
  }

  async getBoxScores() {
    const yesterday = moment().subtract('1', 'day');
    this.setState({
      isLoading: true,
    });
    const date = {
      year: yesterday.format('YYYY'),
      month: yesterday.format('MM'),
      day: yesterday.format('DD'),
    }
    const boxscores = await mlbApi.getAllBoxScoresOnDate(date);
    this.setState({
      isLoading: false,
      boxscores,
    })
  }

  displayBoxScores() {
    const elements = [];
    this.state.boxscores.map((boxscore, index) => {
      elements.push(<div key={index} style={{width: '275px'}}><BoxScore data={boxscore}/></div>)
    })
    return elements;
  }

  render() {
    const { isLoading } = this.state;
    const options = {
      isFitWidth: true,
    }
    return (
      <Masonry
        options={options}
        style={{margin:'0 auto 0 auto'}}
      >
        { isLoading ? <div>Loading...</div> : this.displayBoxScores() }
      </Masonry>
    )
  }
}

export default Home;