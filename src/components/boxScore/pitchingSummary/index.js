import React from 'react';
import styled from 'styled-components';

const PitchStatTH = styled.th`
  text-align: ${props => props.textAlign || 'right'};
  width: ${props => props.width || '5%'};
`;

const PitchingSummary = ({ pitching, away_sname, home_sname }) => {
  
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
          <PitchStatTH textAlign="left" width="auto">{name}</PitchStatTH>
          <PitchStatTH>IP</PitchStatTH>
          <PitchStatTH>H</PitchStatTH>
          <PitchStatTH>ER</PitchStatTH>
          <PitchStatTH>BB</PitchStatTH>
          <PitchStatTH>SO</PitchStatTH>
          <PitchStatTH>NP</PitchStatTH>
          <PitchStatTH>ERA</PitchStatTH>
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

  return (
    <div>
      {listTeamPitching(away_sname, pitching[0].pitcher)}
      {listTeamPitching(home_sname, pitching[1].pitcher)}
    </div>
  )
}

export default PitchingSummary;