import React, { Component } from "react";
import ScoreTable from "../../components/ScoreTable";
import PlayerIntro from "../../components/PlayerIntro";
import './index.less'

const CoverPage = (props) =>  {
  const { data } = props
  let { match, player, record } = data
  let playerName = [player[0][0].name, player[1][0].name]
  record = { ...record, playerName } // add player name to record 
  let score = record.result ? record.result : [0, 0]
  
  let subtitleText = document.getElementById("cover-page-subtitle-text");
  if (subtitleText) {
    const width = subtitleText.clientWidth || subtitleText.offsetWidth;
    if (width > 215) {
      let subtitle = document.getElementById("cover-page-subtitle")
      if (subtitle) {
        subtitle.style.width = "fit-content"
        subtitle.style.padding = "0 30px"
      }
    }    
  }

  return (
    <div className="mobile-page">
      <div className="mobile-header" />
      <div className="mobile-title">
        <div>国家乒乓球队大数据平台</div>   
      </div>
      <div className="mobile-subtitle" id="cover-page-subtitle">
        {match ? (<div id="cover-page-subtitle-text">
            {match.competition}: {match.country[0]}vs{match.country[1]}
          </div>) : null}
      </div>
      <div style={{marginTop:"44px"}}>
        <PlayerIntro player={player} match={match} score={ score } />
      </div>
      <div style={{marginTop:"16px"}}>
        <ScoreTable record={ record } />
      </div>
      <div className="mobile-arrow" />
      <div className="mobile-footer">
        <div className="mobile-footer-dot" />
        <div className="mobile-footer-line" />
        <div className="mobile-logo" />
        <div className="mobile-footer-text">
            Powered By Calliope
        </div>
        <div className="mobile-footer-line" />
        <div className="mobile-footer-dot" />
      </div>
    </div>
    )

}

export default CoverPage