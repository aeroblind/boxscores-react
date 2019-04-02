import React from 'react';
import { parse } from 'node-html-parser';

import FlexBox from '../../styled/flexbox';
import FlexItem from '../../styled/flexItem';
import LineScoreColumn from '../../styled/lineScoreColumn';
import LineScoreHorRule from '../../styled/lineScoreHorRule';



const BattingSummary = ({ batting, away_sname, home_sname }) => {
  
  console.log(batting[0].text_data);
  const test = parse(batting[0].text_data);

  console.log(test);

  const isThirdColumn = (index) => {
    return index % 3 === 0;
  };

  // const listInnings = inning_line_score.map((inning, index) => (
  //   <FlexBox 
  //     key={index} 
  //     margin={isThirdColumn(index + 1) ? '0 5px 0 0' : '0'}
  //     flexDirection="column">
  //       <span>{ inning.away }</span>
  //       <span>{ inning.home }</span>
  //   </FlexBox>
  // ));
  const getNameAndPosition = (batter) => {
    const { name, pos } = batter;
    const names = name_display_first_last.split('/')
  }
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

  return (
    <div>
      {listTeamBatting(away_sname, batting[0].batter)}
      {listTeamBatting(home_sname, batting[1].batter)}
    </div>
  )
}

export default BattingSummary;