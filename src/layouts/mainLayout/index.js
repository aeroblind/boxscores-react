import React from 'react';

import Header from '../../components/header';

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  )
}

export default MainLayout;
