import React from 'react';
import * as helper from '../../../util/summaryHelpers';
import styled from 'styled-components';

const BatStatTH = styled.th`
  text-align: ${props => props.textAlign || 'right'};
  width: ${props => props.width || '9%'};
`;

const tableStyle = {
  width:"100%",
  borderCollapse:"collapse",
  margin: "2px 0 0 0"
}

const BattingSummary = ({
  awayBatters,
  homeBatters,
  away_sname,
  home_sname,
  fieldingAndBattingInfo,
}) => {
  
  console.log(fieldingAndBattingInfo);

  const battingInfo = Object.keys(fieldingAndBattingInfo[0]).length > 0 ? fieldingAndBattingInfo[0].fieldList : {};
  const baserunningInfo = {}//Object.keys(fieldingAndBattingInfo[1]).length > 0 ? fieldingAndBattingInfo[1].fieldList : {};
  const fieldingInfo = {}// Object.keys(fieldingAndBattingInfo[2]).length > 0 ? fieldingAndBattingInfo[2].fieldList : {};

  console.log(fieldingInfo);

  const listTeamBatting = (name, batters) => {
    return(
      <table style={ tableStyle }>
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
        {batters.map((batter, index) => (
          <tr key={index}>
            <td style={{textAlign: "left"}}>{`${batter.name} ${batter.position.toLowerCase()}`}</td>
            <td style={{textAlign: "right"}}>{batter.atBats}</td>
            <td style={{textAlign: "right"}}>{batter.runs}</td>
            <td style={{textAlign: "right"}}>{batter.hits}</td>
            <td style={{textAlign: "right"}}>{batter.rbi}</td>
            <td style={{textAlign: "right"}}>{batter.baseOnBalls}</td>
            <td style={{textAlign: "right"}}>{batter.strikeOuts}</td>
            <td style={{textAlign: "right"}}>{batter.avg}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  };

  const listBattingTextData = () => {
    return helper.createDisplayElements([(fieldingInfo || {}), (battingInfo || {}), (baserunningInfo || {})])
  }

  return (
    <div>
      {listTeamBatting(away_sname, awayBatters)}
      {listTeamBatting(home_sname, homeBatters)}
      <div style={{margin: "2px 0 0 0"}}>
        { listBattingTextData() }
      </div>
    </div>
  )
}

export default BattingSummary;