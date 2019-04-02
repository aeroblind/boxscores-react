import React, {Component} from 'react';
import BoxScore from '../../components/boxScore';
import fakeData from '../../../fakeData.json';

const MLBBoxscores = require('mlbboxscores');

console.log(fakeData.data.boxscore);
class Home extends Component {
  constructor(props) {
    super(props);

    this.getBoxScores = this.getBoxScores.bind(this);
    this.displayBoxScores = this.displayBoxScores.bind(this);

    this.state = {
      isLoading: false,
      boxScores: [],
    }
  }
  componentDidMount(){
    //this.getBoxScores();
    this.setState({
      boxScores: [fakeData.data.boxscore]
    })
  }

  getBoxScores() {
    this.setState({
      isLoading: true,
    });
    var options = {
      path: 'year_2019/month_03/day_31/'
    };
    
    var mlbboxscores = new MLBBoxscores(options);
    mlbboxscores.get((err, boxscores) => {
      this.setState({
        isLoading: false,
        boxScores: boxscores
      })
    });
  }

  displayBoxScores() {
    const elements = [];
    this.state.boxScores.map((boxScore, index) => {
      elements.push(<BoxScore key={index} data={boxScore} />)
    })
    return elements;
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div style={{width: '300px'}}>
        { isLoading ? <div>Loading...</div> : this.displayBoxScores() }
      </div>
    )
  }
}

export default Home;