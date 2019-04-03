import React from 'react';
import * as helper from '../../../util/summaryHelpers';

const GameInfo = ({ gameInfo, away_sname, home_sname }) => {

  const listGameInfoData = () => {
    const textData = helper.parseTextData(gameInfo, ['WP', 'HBP', 'Inherited runners-scored', 'Umpires', 'T', 'Att'])
    return helper.createDisplayElements([textData])
  }

  return (
    <div>
      {listGameInfoData()}      
    </div>
  )
}

export default GameInfo;