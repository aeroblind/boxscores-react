import React, { Component } from 'react';
import Header from '../../components/header';
import Container from '../../components/styled/container';
import devices from '../../util/devices';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      deviceSize: '',
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
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

  render() {
    const { children } = this.props;
    const { deviceSize } = this.state;
    const clonedChildren = React.Children.map(children, child => (
      React.cloneElement(child, {
        deviceSize,
      })
    ));
    return (
      <React.Fragment>
        <Header />
        <Container>
          {clonedChildren}
        </Container>
      </React.Fragment>
    )
  }
}

export default MainLayout;
