import React from 'react';

import Header from '../../components/header';
import Container from '../../components/styled/container';

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {children}
      </Container>
    </React.Fragment>
  )
}

export default MainLayout;
