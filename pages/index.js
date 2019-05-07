import React, { Component } from 'react';
import MainLayout from '../src/layouts/mainLayout';
import HomeView from '../src/pages/home';
import * as dugoutApi from '../src/api/dugoutApi';
import * as util from '../src/util';
import moment from 'moment';

class Home extends Component {
  static async getInitialProps({ req, query }) {
    console.log(req.headers);
    console.log(util.isMobile(req.headers['user-agent']));
    const date = query.date || Home.getDate();
    const boxscores = await dugoutApi.getBoxscoresByDate(date);
    return { boxscores };
  }

  static getDate(){
    return moment().format('L');
  }

  render() {
    const { boxscores } = this.props;
    return (
      <MainLayout>
        <HomeView boxscores={ boxscores } />
      </MainLayout>
    )
  }
}

export default Home;