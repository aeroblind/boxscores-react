import React from 'react';
import styled from 'styled-components';
import FlexBox from '../styled/flexbox';
import Container from '../styled/container';
import BoxScore from '../boxScore';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumns || 'repeat(3, 1fr)'};
  grid-template-rows: ${props => props.gridTemplateRows || ''};
`;

const Scoreboard = ({scores, date}) => {

  const displayBoxScores = () => {
    const elements = [];
    scores.map((score, index) => {
      elements.push(
        <div key={index} style={{width: '100%'}}>
          <BoxScore
            score={score}
            date={date}
          />
        </div>
      )
    })
    return elements;
  }

  return (
    <Container padding='0'>
      <GridContainer>
        <Container>
          {displayBoxScores()}
        </Container>
        <Container backgroundColor='maroon'>TEST</Container>
        <Container backgroundColor='blue'>TEST</Container>
      </GridContainer>
    </Container>
  )
}

export default Scoreboard