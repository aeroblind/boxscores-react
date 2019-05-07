import React from 'react';
import styled from 'styled-components';
import FlexBox from '../styled/flexbox';
import Container from '../styled/container';
import Boxscore from '../boxscore';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.gridTemplateColumns}, 1fr)` || 'repeat(1, 1fr)'};
  grid-template-rows: ${props => props.gridTemplateRows || ''};
`;

const Scoreboard = ({boxscores}) => {
  const displayBoxscores = () => {
    const elements = [];
    boxscores.map((boxscore, index1)  => {
      elements.push(
        <Container key={index1} padding='0'>
          <div style={{width: '100%'}}>
            <Boxscore
              boxscore={boxscore}
            />
          </div>
        </Container>
      )
    })
    return elements;
  }

  return (
    <Container padding='0'>
      <GridContainer gridTemplateColumns={boxscores.length}>
        {displayBoxscores()}
      </GridContainer>
    </Container>
  )
}

export default Scoreboard