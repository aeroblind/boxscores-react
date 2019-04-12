import React, { Component } from 'react';
import { Link } from "react-router-dom";
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

const JbsLink = styled.a`
  text-decoration: 'inherit';
`
const linkStyle = {
  textDecoration: 'none',
  color: theme.colors.medium,
};

const activelinkStyle = {
  textDecoration: 'none',
  color: theme.colors.dark,
  fontWeight: 700,
};

class Header extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      links: [
        {
          id: 0,
          path: '/',
          displayName: 'Scores',
        },
        {
          id: 1,
          displayName: 'Standings',
          path: '/standings',
        },
        {
          id: 2,
          displayName: 'Stats',
          path: '/stats',
        }
      ],
      activeLinkIndex: 0,
    }
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      activeLinkIndex: parseInt(e.target.id)
    })
  }
  render() {
    const { activeLinkIndex, links } = this.state;
    console.log(`activeLinkIndex ${activeLinkIndex}`)
    return (
      <NavBar>
        <FlexBox alignItems="center" justifyContent="center" alignItems="center">
          <span><b>JUST BOX SCORES</b></span>
        </FlexBox>
        <FlexBox
          fontSize="14px"
          padding="3px 0 3px 0"
          justifyContent="center"
          margin="5px 0 0 0"
          color={theme.colors.medium}
        >
          {links.map(link => {
            return (
            <div key={link.id} style={{flexGrow: 1, textAlign: 'center'}}>
              <Link
                id={link.id}
                style={(activeLinkIndex === link.id) ? activelinkStyle : linkStyle}
                to={link.path}
                onClick={this.handleClick}
              >{link.displayName}</Link>
            </div>
          )})
          }
        </FlexBox>
      </NavBar>
    );
  }
}
    


export default Header;