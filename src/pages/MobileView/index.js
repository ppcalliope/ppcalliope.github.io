import React, { useState, useRef } from "react";
import Swiper from "react-id-swiper"
import ReactResizeDetector from 'react-resize-detector';
import PosterPage from "../../mobilepages/PosterPage"
import CoverPage from "../../mobilepages/CoverPage"
import ScorePage from "../../mobilepages/ScorePage"
import VideoPage from "../../mobilepages/VideoPage"
import JumpPage from "../../mobilepages/JumpPage"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './index.css'

import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
SwiperCore.use([Keyboard, Mousewheel]);

let mobileClientWidth = 0

function dataProcess(pageData) {
  if (pageData) {
    let data = JSON.parse(pageData).data
    let { Page1, Page2, Page3 } = data
    let Page0 = null
    if (Page1 && Page1.match) {
      Page0 = Page1.match
    }
    return {Page0,Page1,Page2,Page3}
  } else {
    return {Page0:null,Page1:null,Page2:null,Page3:null}
  }
}

function MobileView(props) {
  let { data, isPublish } = props
  const [scoreData, setScoreData] = useState(null)
  const swiperRef = useRef(null)
 
  // Params definition
  const params = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    simulateTouch: true,
    height: isPublish? document.body.clientHeight : 640,
    width: mobileClientWidth,
  };

  const onResize = (handleWidth, handleHeight) => {
    mobileClientWidth = handleWidth
  }
 
  let { Page0, Page1, Page2, Page3 } = dataProcess(data)
  if (Page1) {
    let { player } = Page1
    let playerName = [player[0][0].name, player[1][0].name]
    Page3 = { ...Page3, playerName }
  }

  return (
    <div id='mobile-swiper' style={{ overflowY: 'hidden', height: isPublish ? document.body.clientHeight : 640 }}>
      {data ? <div className="swiper">
        <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
        <Swiper {...params} ref={swiperRef}>
          <div className="mobile-slide-item">
            <PosterPage data={Page0} />
          </div>
          <div className="mobile-slide-item" style={{ height: params.height, marginBottom: 30 }}>
            <CoverPage data={Page1} />
          </div>
          <div className="mobile-slide-item" style={{ height: params.height, marginBottom: 30 }}>
            <ScorePage data={Page2} setScoreData={setScoreData} swiper={swiperRef} />
          </div>
          <div className="mobile-slide-item" style={{ height: params.height, marginBottom: 30 }}>
            <VideoPage data={Page3} />
          </div>
          <div className="mobile-slide-item" style={{ height: params.height, marginBottom: 30 }}>
            <JumpPage data={Page3} scoreData={scoreData} />
          </div>
        </Swiper>
      </div>: null}
    </div> 
  );
}

export default MobileView