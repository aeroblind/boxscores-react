import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mlbApi from '../../api/mlbApi';
import * as mlbActions from '../../_actions/mlbActions'
import mlb from '../../models/mlb';

class Standings extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { getStandings } = this.props;
    getStandings();
  }
  
  render() {
    const { standings } = this.props;
    const americanLeague = standings.filter(division => {
      return (division.league.id === mlb.leagues.american.id)
    })
    return (
      <div>
        <div>American League</div>
        {americanLeague.map(division => {
          console.log(division);
          const divisionName = mlb.leagues.american.divisions[division.division.id];
          return(
            <div key={division.division.id}>
              <table>
                <tbody>
                <tr>
                  <th textAlign={"left"} width='auto'>{divisionName}</th>
                  <th>W</th>
                  <th>L</th>
                  <th>PCT</th>
                  <th>GB</th>
                  <th>L10</th>
                  <th>STRK</th>
                </tr>
                {division.teamRecords.map(teamRecord => (
                  <tr key={teamRecord.team.id}>
                    <td style={{textAlign: "left"}}>{teamRecord.team.name}</td>
                    <td style={{textAlign: "right"}}>{teamRecord.wins}</td>
                    <td style={{textAlign: "right"}}>{teamRecord.losses}</td>
                    <td style={{textAlign: "right"}}>{teamRecord.winningPercentage}</td>
                    <td style={{textAlign: "right"}}>{teamRecord.gamesBack}</td>
                    <td style={{textAlign: "right"}}>{"fix"}</td>
                    <td style={{textAlign: "right"}}>{teamRecord.so}</td>
                    <td style={{textAlign: "right"}}>{teamRecord.streak.streakCode}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    standings: state.mlb.standings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStandings: () => dispatch(mlbActions.getStandings()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Standings);


