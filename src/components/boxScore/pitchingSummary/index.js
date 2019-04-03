import React from 'react';
import { parse } from 'node-html-parser';

const PitchingSummary = ({ pitching, away_sname, home_sname }) => {
  
  const trimRawText = (text) => {
    const trimmedString = text.substring(1, text.length-1).trim();
    return trimmedString.split(';')
  }
  
  const buildTextDataAsJson = () => {
    const textData = {};
    var sectionKey = '';
    var catagoryKey = '';
    pitching.map(teamPitching => {
      const element = parse(teamPitching.text_data);
      console.log(element);
      element.childNodes.map(childNode => {
        if (childNode.childNodes.length > 0) {
          if (childNode.tagName === 'b' &&  (
              childNode.childNodes[0].rawText === "PITCHING")
            ) {
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

  const getPitcherNote = (pitcher) => {
    var tag = ''
    if(pitcher.win || pitcher.loss || pitcher.sv != "0") {
      tag = pitcher.note;
    }
    return tag;
  }

  const listTeamPitching = (name, pitchers) => {
    return(
      <table style={{width:"100%"}}>
        <tbody>
        <tr>
          <th style={{textAlign: "left"}}>{name}</th>
          <th style={{textAlign: "right"}}>IP</th>
          <th style={{textAlign: "right"}}>H</th>
          <th style={{textAlign: "right"}}>ER</th>
          <th style={{textAlign: "right"}}>BB</th>
          <th style={{textAlign: "right"}}>SO</th>
          <th style={{textAlign: "right"}}>NP</th>
          <th style={{textAlign: "right"}}>ERA</th>
        </tr>
        {pitchers.map(pitcher => (
          <tr key={pitcher.id}>
            <td style={{textAlign: "left"}}>{`${pitcher.name} ${getPitcherNote(pitcher)}`}</td>
            <td style={{textAlign: "right"}}>{pitcher.s_ip}</td>
            <td style={{textAlign: "right"}}>{pitcher.h}</td>
            <td style={{textAlign: "right"}}>{pitcher.er}</td>
            <td style={{textAlign: "right"}}>{pitcher.bb}</td>
            <td style={{textAlign: "right"}}>{pitcher.so}</td>
            <td style={{textAlign: "right"}}>{pitcher.np}</td>
            <td style={{textAlign: "right"}}>{pitcher.era}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  };

  const listPitchingTextData = () => {
    const textData = buildTextDataAsJson();
    console.log(textData);
    // const element = [];
    // [textData.PITCHING].map(textData => {
    //   if (Object.keys(textData).length > 0) {
    //     Object.keys(textData).map(key => {
    //       element.push(<span><b>{key}: </b>{textData[key].map((value, index) => {
    //         if (textData[key].length === 1 && index === 0) {
    //           return <span>{value} </span>
    //         } else if ((textData[key].length >= 0 && index === 0) || (index >= 0 && index < textData[key].length - 1)) {
    //           return <span>{value}, </span>
    //         } else {
    //           return <span>{value}</span>
    //         }
    //       })} </span>)
    //     })
    //   }
    // });

    // return element;
  }

  return (
    <div>
      {listTeamPitching(away_sname, pitching[0].pitcher)}
      {listTeamPitching(home_sname, pitching[1].pitcher)}
      {listPitchingTextData()}
    </div>
  )
}

export default PitchingSummary;