import React from 'react';

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

  return (
    <div>
      {listTeamPitching(away_sname, pitching[0].pitcher)}
      {listTeamPitching(home_sname, pitching[1].pitcher)}
    </div>
  )
}

export default PitchingSummary;