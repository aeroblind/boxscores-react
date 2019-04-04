import React from 'react';
import styled from 'styled-components';

import FlexBox from '../styled/flexbox';

const NavBar = styled.div`
  height: 40px;
  width: 100%;
  padding: 5px;
  margin: 0 0 20px 0;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .25);
  font-family: Georgia;
  font-size: 20px;
  background-color: white;
`;


const Header = ({children}) => {
  return (
    <NavBar>
      <FlexBox alignItems="center" justifyContent="center">
        <span><b>JUST BOX SCORES</b></span>
      </FlexBox>
    </NavBar>
  )
}

export default Header;