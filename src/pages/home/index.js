import React, {Component} from 'react';
import BoxScore from '../../components/boxScore';
import FlexBox from '../../components/styled/flexbox';
import Container from '../../components/styled/container';
import moment from 'moment';
import Scoreboard from '../../components/scoreboard';
//  import fakeData from '../../../fakeData.json';
import * as mlbApi from '../../api/mlbApi';
import devices from '../../util/devices';

class Home extends Component {
  constructor(props) {
    super(props);

    this.getGameScores = this.getGameScores.bind(this);
    this.isLoading = this.isLoading.bind(this);
    this.deviceDidChangeSize = this.deviceDidChangeSize.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);


    this.state = {
      isLoading: false,
      scores: [],
      scoreMatrix: [],
      date: this.getDate(1),
      deviceSize: ''
    }
  }

  async componentDidMount(){
    await this.getGameScores(this.state.date);
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillMount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const { deviceSize } = this.state;
    let didChangeSize = false;
    let localDeviceSize = '';
    if (this.state.scores.length > 0) {
      if (window.innerWidth <= devices.smallDevices.minWidth && deviceSize !== devices.smallDevices.name)  {
        didChangeSize = true;
        localDeviceSize = devices.smallDevices.name
      } else if (window.innerWidth > devices.smallDevices.minWidth && window.innerWidth <= devices.mediumDevices.minWidth && deviceSize !== devices.mediumDevices.name ) {
        didChangeSize = true;
        localDeviceSize = devices.mediumDevices.name
      } else if (window.innerWidth > devices.mediumDevices.minWidth && deviceSize !== devices.largeDevices.name) {
        didChangeSize = true;
        localDeviceSize = devices.largeDevices.name
      }
      if (didChangeSize) {
        this.deviceDidChangeSize(localDeviceSize);
      }
    }
  }

  deviceDidChangeSize(size) {
    const { scores } = this.state;
    let localScores = []
    let mod = 1;
    if (size === devices.smallDevices.name) {
      
    } else if (size === devices.mediumDevices.name) {
      mod = 2
    } else if (size === devices.largeDevices.name || size === devices.extraLargeDevices.name) {
      mod = 3
    }

    for (var i=0; i<= mod-1; i++) {
      localScores.push([]);
    };

    scores.map((score, index) => {
      localScores[index % mod].push(score);
    })

    this.setState({
      deviceSize: size,
      scoreMatrix: localScores,
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
    const { isLoading, scoreMatrix, date } = this.state;
    return (
      <Container padding='0' margin="auto">
        {/* <FlexBox
          flexDirection="column"
          alignItems="center">
          { isLoading ?
            <div>Loading...</div> : this.displayBoxScores() 
          }
        </FlexBox> */}
        {scoreMatrix.length > 0 && 
          <Scoreboard scoresMatrix={scoreMatrix} date={date}></Scoreboard>
        }
      </Container>
    )
  }
}

export default Home;