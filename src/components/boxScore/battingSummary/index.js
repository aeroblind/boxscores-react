import React from 'react';
import * as helper from '../../../util/summaryHelpers';

const BattingSummary = ({ batting, away_sname, home_sname }) => {
  
  const listTeamBatting = (name, batters) => {
    return(
      <table style={{width:"100%"}}>
        <tbody>
        <tr>
          <th style={{textAlign: "left"}}>{name}</th>
          <th style={{textAlign: "right"}}>AB</th>
          <th style={{textAlign: "right"}}>R</th>
          <th style={{textAlign: "right"}}>H</th>
          <th style={{textAlign: "right"}}>BI</th>
          <th style={{textAlign: "right"}}>BB</th>
          <th style={{textAlign: "right"}}>SO</th>
          <th style={{textAlign: "right"}}>AVG</th>
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
    return helper.createDisplayElements([textData.FIELDING, textData.BATTING, textData.BASERUNNING])
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