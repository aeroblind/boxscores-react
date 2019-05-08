import React, { Component } from 'react';
import MainLayout from '../src/layouts/mainLayout';
import HomeView from '../src/pages/home';
import * as dugoutApi from '../src/api/dugoutApi';
import * as util from '../src/util';
import moment from 'moment';

class Home extends Component {
  static async getInitialProps({ req, query }) {
    const isMobile = util.isMobile(req.headers['user-agent']);
    const date = query.date || Home.getDate();
    const boxscores = await dugoutApi.getBoxscoresByDate(date);
    return { boxscores, isMobile };
  }

  static getDate(){
    return moment().format('L');
  }

  render() {
    const { boxscores, isMobile } = this.props;
    return (
      <MainLayout>
        <HomeView
          boxscores={ boxscores }
          isMobile={ isMobile }
        />
      </MainLayout>
    )
  }
}

export default Home;