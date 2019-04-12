import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import FlexBox from '../styled/flexbox';
import theme from '../../style/theme';


const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .25);
  font-family: Georgia;
  font-size: 20px;
  background-color: ${theme.colors.dark};
  color: white;
`;

const JbsLink = styled.a`
  text-decoration: 'inherit';
`
const linkStyle = {
  textDecoration: 'none',
  color: theme.colors.light,
};

const activelinkStyle = {
  textDecoration: 'none',
  color: 'white',
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
          displayName: 'Scores',
          path: '/',
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

    const gridStyle = {
      flexGrow: 1,
      alignItems: "center",
    };

    return (
      <NavBar>
        <FlexBox
          fontSize="14px"
          padding="0 10px 0 10px"
          justifyContent="center"
          alignItems="center"
        >
          <div style={{fontSize: '18px', margin: '0 10px 0 0'}}>
            <span ><b>JBS</b></span>
          </div>
          <FlexBox style={gridStyle} overflow="scroll"> 
            {links.map(link => {
              return (
                <div key={link.id} style={{textAlign: 'center', minWidth: '100px' }}>
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
          
        </FlexBox>
      </NavBar>
    );
  }
}
    


export default Header;