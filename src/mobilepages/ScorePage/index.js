import React, { Component } from "react";
import DetailTable from "../../components/DetailTable";
import './index.less'

const ScorePage = (props) => {
  let { data, setScoreData, swiper } = props
  let table1 = data.table[0], table2 = data.table[1]

  return (
    <div className="mobile-page">
      <div className="mobile-header" />
      <div className="mobile-title">
        <div>国家乒乓球队大数据平台</div>   
      </div>
      <div className="mobile-subtitle">
        双方球员三段法信息
      </div>
      <div style={{marginTop:"41px"}}>
        <DetailTable position="0" data={table1} setScoreData={setScoreData} swiper={swiper} />
      </div>
      <div style={{marginTop:"20px"}}>
        <DetailTable position="1" data={ table2 } setScoreData={setScoreData} swiper={swiper} />
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

export default ScorePage