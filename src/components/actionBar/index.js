import React, { Component } from 'react';
import Container from '../styled/container';
import FlexBox from '../styled/flexbox';
import theme from '../../style/theme';
import moment from 'moment';


class ActionBar extends Component {

  constructor(props) {
    super(props);
    this.didClickGoBack = this.didClickGoBack.bind(this);
    this.didClickGoForward = this.didClickGoForward.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.state = {
      date: props.date,
    }
  }

  changeDate(increment) {
    const { didChangeDate } = this.props;
    const newDate = moment(this.state.date, 'L').add(increment, "days").format('L');
    this.setState({
      date: newDate
    }, didChangeDate(newDate))
  }

  didClickGoBack() {
    this.changeDate(-1);
  }

  didClickGoForward() {
    this.changeDate(1);
  }

  render() {
    return (
      <Container height="40px" backgroundColor="yellow">
        <input type="button" value="<" onClick={this.didClickGoBack} />
        <input type="button" value=">" onClick={this.didClickGoForward} />
      </Container>
    )
  }
}

export default ActionBar;
