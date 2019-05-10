import React, { Component } from 'react';
import moment from 'moment';
import config from '../config';
import MainLayout from '../src/layouts/mainLayout';
import HomeView from '../src/pages/home';
import * as dugoutApi from '../src/api/dugoutApi';
import * as util from '../src/util';

class Home extends Component {
  static async getInitialProps({ req, query }) {
    const isMobile = util.isMobile(req);
    const date = query.date || Home.getDate();
    const boxscores = await dugoutApi.getBoxscoresByDate(date);
    return { boxscores, isMobile };
  }

  static getDate(){
    return moment().utcOffset(config.utcOffset).format('L');
  }

  render() {
    const { boxscores, isMobile } = this.props;
    return (
      <MainLayout>
        <HomeView
          boxscores={ boxscores || [] }
          isMobile={ isMobile }
        />
      </MainLayout>
    )
  }
}

export default Home;