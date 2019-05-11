import React, { Component } from 'react';
import * as mlbApi from '../../api/mlbApi';
import Container from '../../components/styled/container';
import FlexBox from '../../components/styled/flexbox';
import theme from '../../style/theme';

class Stats extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Container
        >
          <FlexBox>
            <Container
              maxWidth="150px"
              backgroundColor="white"
              margin="8px"
              borderRadius="5px"
              borderColor={theme.colors.medium}
              borderWidth="1px"
              borderStyle="solid"
              flexGrow={1}
            >
              <div><span style={{color: theme.colors.dark}}><b>Homeruns</b></span></div>
              <table style={{width: '100%'}}>
                <tbody>
                  <tr>
                    <th width='20%'></th>
                    <th width="auto"></th>
                    <th width="20%"></th>
                  </tr>
                  {[1,1,1,1,1,1,1,1,1,1].map(_ => 
                    {
                      return (
                        <tr>
                          <td style={{textAlign: "left"}}>Hou</td>
                          <td style={{textAlign: "left"}}>Altuve, J</td>
                          <td style={{textAlign: "right"}}>15</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </Container>
            <Container
              maxWidth="150px"
              backgroundColor="white"
              margin="8px"
              borderRadius="5px"
              borderColor={theme.colors.medium}
              borderWidth="1px"
              borderStyle="solid"
              flexGrow={1}
            >
              <div><span style={{color: theme.colors.dark}}><b>RBIs</b></span></div>
              <table style={{width: '100%'}}>
                <tbody>
                  <tr>
                    <th width='20%'></th>
                    <th width="auto"></th>
                    <th width="20%"></th>
                  </tr>
                  {[1,1,1,1,1,1,1,1,1,1].map(_ => 
                    {
                      return (
                        <tr>
                          <td style={{textAlign: "left"}}>Hou</td>
                          <td style={{textAlign: "left"}}>Altuve, J</td>
                          <td style={{textAlign: "right"}}>100</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </Container>
            <Container
              maxWidth="150px"
              backgroundColor="white"
              margin="8px"
              borderRadius="5px"
              borderColor={theme.colors.medium}
              borderWidth="1px"
              borderStyle="solid"
              flexGrow={1}
            >
              <div><span style={{color: theme.colors.dark}}><b>RBIs</b></span></div>
              <table style={{width: '100%'}}>
                <tbody>
                  <tr>
                    <th width='20%'></th>
                    <th width="auto"></th>
                    <th width="20%"></th>
                  </tr>
                  {[1,1,1,1,1,1,1,1,1,1].map(_ => 
                    {
                      return (
                        <tr>
                          <td style={{textAlign: "left"}}>Hou</td>
                          <td style={{textAlign: "left"}}>Altuve, J</td>
                          <td style={{textAlign: "right"}}>100</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </Container>
          </FlexBox>
        </Container>
      </div>
    )
  }
}

export default Stats;