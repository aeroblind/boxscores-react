import React, {Component} from 'react';
import BoxScore from '../../components/boxScore';
import FlexBox from '../../components/styled/flexbox';
import moment from 'moment';
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
    this.getBoxScores();
    // this.setState({
    //   boxScores: [fakeData.data.boxscore]
    // })
  }

  getBoxScores() {

    const yesterday = moment().subtract('1', 'day');
  
    this.setState({
      isLoading: true,
    });
    var options = {
      path: `year_${yesterday.format('YYYY')}/month_${yesterday.format('MM')}/day_${yesterday.format('DD')}/`
    };
    
    var mlbboxscores = new MLBBoxscores(options);
    mlbboxscores.get((err, boxscores) => {
      //console.log(boxscores[1]);
      this.setState({
        isLoading: false,
        boxScores: boxscores,//[boxscores[1]]
      })
    });
  }

  displayBoxScores() {
    const elements = [];
    this.state.boxScores.map((boxScore, index) => {
      elements.push(<div style={{width: '250px'}}><BoxScore key={index} data={boxScore}/></div>)
    })
    return elements;
  }

  render() {
    const { isLoading } = this.state;
    return (
      <FlexBox flexWrap="wrap" alignItems="flex-start">
        { isLoading ? <div>Loading...</div> : this.displayBoxScores() }
      </FlexBox>
    )
  }
}

export default Home;