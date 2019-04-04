import React from 'react';

import Header from '../../components/header';

const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}

export default MainLayout;
