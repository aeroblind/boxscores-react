import React, { Component } from 'react';
import { withRouter } from "react-router";
import { useSwipeable, Swipeable } from 'react-swipeable'
import Header from '../../components/header';
import Container from '../../components/styled/container';
import devices from '../../util/devices';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);

    this.state = {
      deviceSize: '',
      routes: ['/', '/standings', 'stats'],
      routeIndex: 0,
    }
  }

  componentDidMount(){
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
      this.setState({
        deviceSize: localDeviceSize,
      })
    }
  }

  handleSwipe(e) {
    const { routes, routeIndex } = this.state;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 50) {
        if(routeIndex < 2) {
          this.props.history.push(routes[routeIndex + 1]);
          this.setState({
            routeIndex: routeIndex + 1,
          })
        }
      } else if (e.deltaX < -50) {
        if(routeIndex > 0) {
          this.props.history.push(routes[routeIndex - 1]);
          this.setState({
            routeIndex: routeIndex - 1,
          })
        }
      }
    }
  }

  render() {
    const { children } = this.props;
    const { deviceSize } = this.state;
    const clonedChildren = React.Children.map(children, child => (
      React.cloneElement(child, {
        deviceSize,
      })
    ));
    return (
      <Container padding="0" height="100%">
        <Header />
        <Swipeable onSwiped={this.handleSwipe} style={{height: "100%"}}>
          <Container>
            {clonedChildren}
          </Container>
        </Swipeable>
      </Container>
    )
  }
}

export default withRouter(MainLayout);
