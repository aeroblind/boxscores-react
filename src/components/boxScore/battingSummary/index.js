import React from 'react';
import { parse } from 'node-html-parser';

const BattingSummary = ({ batting, away_sname, home_sname }) => {
  

  const trimRawText = (text) => {
    const trimmedString = text.substring(1, text.length-1).trim();
    return trimmedString.split(';')
  }
  
  const buildTextDataAsJson = () => {
    const textData = {};
    var sectionKey = '';
    var catagoryKey = '';
    batting.map(teamBatting => {
      const element = parse(teamBatting.text_data);
      element.childNodes.map(childNode => {
        if (childNode.childNodes.length > 0) {
          if (childNode.tagName === 'b' && (childNode.childNodes[0].rawText === "BATTING") || childNode.childNodes[0].rawText === "FIELDING") {
            sectionKey = childNode.childNodes[0].rawText;
            if(!textData[sectionKey]) {
              textData[sectionKey] = {};
            }
          } else if (childNode.tagName === 'b') {
            catagoryKey = childNode.childNodes[0].rawText;
            if(!textData[sectionKey][catagoryKey]) {
              textData[sectionKey][catagoryKey] = [];
            }
          } 
        } else {
          if (childNode.nodeType === 3) {
            textData[sectionKey][catagoryKey].push(...trimRawText(childNode.rawText));
          }
        }
      })
    })
  
    return textData;
  }

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

  const listBattingTextData = () => {
    const textData = buildTextDataAsJson();
    const element = []

    Object.keys(textData.FIELDING).map(key => {
      element.push(<span><b>{key}: </b>{textData.FIELDING[key].map((value, index) => {
        if (textData.FIELDING[key].length === 1 && index === 0) {
          return <span>{value} </span>
        } else if ((textData.FIELDING[key].length >= 0 && index === 0) || (index >= 0 && index < textData.FIELDING[key].length - 1)) {
          return <span>{value}, </span>
        } else {
          return <span>{value}</span>
        }
      })} </span>)
    })

    return element;
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