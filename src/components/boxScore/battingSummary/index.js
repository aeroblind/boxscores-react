import React from 'react';
import * as helper from '../../../util/summaryHelpers';
import styled from 'styled-components';

const BatStatTH = styled.th`
  text-align: ${props => props.textAlign || 'right'};
  width: ${props => props.width || '8%'};
`;

const BattingSummary = ({ batting, away_sname, home_sname }) => {

  const listTeamBatting = (name, batters) => {
    return(
      <table style={{width:"100%"}}>
        <tbody>
        <tr>
          <BatStatTH textAlign={"left"} width='auto'>{name}</BatStatTH>
          <BatStatTH>AB</BatStatTH>
          <BatStatTH>R</BatStatTH>
          <BatStatTH>H</BatStatTH>
          <BatStatTH>BI</BatStatTH>
          <BatStatTH>BB</BatStatTH>
          <BatStatTH>SO</BatStatTH>
          <BatStatTH>AVG</BatStatTH>
        </tr>
        {batters.map(batter => (
          <tr key={batter.id}>
            <td style={{textAlign: "left"}}>{`${batter.name} ${batter.pos.toLowerCase()}`}</td>
            <td style={{textAlign: "right"}}>{batter.ab}</td>
            <td style={{textAlign: "right"}}>{batter.r}</td>
            <td style={{textAlign: "right"}}>{batter.h}</td>
            <td style={{textAlign: "right"}}>{batter.rbi}</td>
            <td style={{textAlign: "right"}}>{batter.bb}</td>
            <td style={{textAlign: "right"}}>{batter.so}</td>
            <td style={{textAlign: "right"}}>{batter.avg}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  };

  const listBattingTextData = () => {
    const textData = helper.parseTextDataFromList(batting, ['FIELDING', 'BATTING', 'BASERUNNING'], ['E', 'DP', '2B', 'HR', 'RBI', 'Team LOB', 'SB', 'CS'])
    console.log(textData);
    return helper.createDisplayElements([textData.FIELDING || {}, textData.BATTING, (textData.BASERUNNING || {})])
  }

  return (
    <div>
      {listTeamBatting(away_sname, batting[0].batter)}
      {listTeamBatting(home_sname, batting[1].batter)}
      {listBattingTextData()}
    </div>
  )
}

export default BattingSummary;