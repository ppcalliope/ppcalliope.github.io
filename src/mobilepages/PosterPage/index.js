import React from "react";
import './index.less'

const PosterPage = (props) =>{
  const data = props.data
  let { competition, country, time } = data

  return (
    <div className="mobile-page poster-bg" >
      <div className="poster-bg-top" />
      <div className="poster-bg-mid" />
      <div className="poster-bg-bottom" />
      <div className="poster-maintitle" />
      <div className="poster-title">
        <div className="match-date">{time[0]}.{time[1]}</div>
        <div className="match-name">{competition}</div>
        <div className="match-name">{country[0]}vs{country[1]}</div>
      </div>
      <div className="poster-subtitle" />

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

export default PosterPage
