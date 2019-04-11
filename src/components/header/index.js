import React from 'react';
import styled from 'styled-components';
import FlexBox from '../styled/flexbox';
import theme from '../../style/theme';


const NavBar = styled.div`
  width: 100%;
  padding: 15px 0 5px 0;
  margin: 0 0 8px 0;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .25);
  font-family: Georgia;
  font-size: 20px;
  background-color: white;
`;


const Header = ({children}) => {
  return (
    <NavBar>
      <FlexBox alignItems="center" justifyContent="center" alignItems="center">
        <span><b>JUST BOX SCORES</b></span>
      </FlexBox>
      <FlexBox fontSize="14px" padding="3px 0 3px 0" justifyContent="center" margin="5px 0 0 0" color={theme.colors.medium}>
        <div style={{flexGrow: 1, textAlign: "center"}}>Scores</div>
        <div style={{flexGrow: 1, textAlign: "center"}}>Standings</div>
        <div style={{flexGrow: 1, textAlign: "center"}}>Stats</div>
      </FlexBox>
    </NavBar>
  )
}

export default Header;