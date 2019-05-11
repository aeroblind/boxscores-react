import React, { Component } from 'react';
import MainLayout from '../src/layouts/mainLayout';
import StatView from '../src/pages/stats';
import * as mlbApi from '../src/api/mlbApi';

class Stats extends Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <MainLayout>
        <StatView />
      </MainLayout>
    )
  }
}
export default Stats;