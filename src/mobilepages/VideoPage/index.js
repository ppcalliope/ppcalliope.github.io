import React, { useState,useEffect,useRef } from "react";
import { Button, Space } from 'antd'
import Swiper from 'react-id-swiper';
import VideoJS from "../../components/VideoPlayer";
import './index.less'


const VideoPage = (props) => {
  const { data } = props
  const { videoUrl, video, playerName } = data

  const playerRef = useRef(null);
  const [pointButtons, setPointButtons] = useState(null)
  const [pointDatas,setPointDatas] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [pauseTime, setPauseTime] = useState(0)


  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    simulateTouch: true,
  }

  const videoJsOptions = { 
    autoplay: false,
    controls: true,
    bigPlayButton: true,
    responsive: true,
    fluid: true,
    preload: 'auto',
    language: 'zh-CN', // 设置语言
    controlBar: {
      children: [
        { name: 'playToggle' },
        { name: 'currentTimeDisplay' }, // 当前已播放时间
        { name: 'progressControl' },
        { name: 'durationDisplay' }, // 总时间
        {
          name: 'volumePanel', // 音量控制
          inline:false
        },
        { name: 'FullscreenToggle' }, // 全屏
      ],
    },
    sources: [{
      src: videoUrl,
      type: 'video/mp4'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };
  
  useEffect(() => {
    if (!pointDatas) {
      setPointDatas(video[0])
      let id = 'rally-' + video[0].round
      document.getElementById(id).focus()
    } else {
      let n = pointDatas.details.length
      let cur = [], total = []
      for (let i = 0; i < n; i++) {
        if (cur.length < 15) {
          cur.push(pointDatas.details[i])
        } else {
          total.push(cur)
          cur = [pointDatas.details[i]]
        }
      }
      total.push(cur)
      let buttons = total.map((group,idx) => {
        return (
          <div className="point-button-container" key={idx}>
            {group.map((item, index) => {
              return (
                <Button className="point-button" key={index} onClick={() => {
                  setCurrentTime(item.startTime)
                  setPauseTime(item.endTime)
                  let id = 'rally-' + pointDatas.round
                  document.getElementById(id).focus()
                }}>
                  <div className="dot-1" style={{visibility: item.winSide===0 ? 'visible' :'hidden'}}></div>
                  <div>{item.score[0]} </div>
                  <div className="rally-score">{ pointDatas.score[0] }:{ pointDatas.score[1] }</div>
                  <div>{item.score[1]} </div>
                  <div className="dot-2" style={{visibility: item.winSide===1 ? 'visible' :'hidden'}}></div>
                </Button>)
            })}
          </div>
        )
      })
      setPointButtons(buttons)
    }
  }, [pointDatas])


  let rallyButtons  = video.map((item, index) => {
      return (
        <Button size={'small'} id={"rally-"+item.round} className="rally-button" key={index} onClick={() => { setPointDatas(item) }}>
          第{item.round}局
        </Button>)
  })
  

  return (
    <div className="mobile-page">
      <div className="mobile-header" />
      <div className="mobile-title">
        <div>国家乒乓球队大数据平台</div>
      </div>
      <div className="mobile-subtitle">
        <div>全场视频信息</div>
      </div>

      <div className="video-container">
        <div className="video-rally-group">
          {rallyButtons}
        </div>
        <div className="video-player">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} currentTime={currentTime} pauseTime={pauseTime} />
        </div>
        <div className="video-banner">
          <div className="banner-player">
            <div className="dot-1"></div>
            <span className="player-name">{playerName[0]}</span>
            <span className="vs">vs</span>
            <span className="player-name">{playerName[1]}</span>
            <div className="dot-2"></div>
          </div>
          <div className="divider"></div>
        </div>
        <div className="video-point-group" style={{ width: "100%"}}>
          <Swiper {...swiperParams} shouldSwiperUpdate>
            {pointButtons}
          </Swiper>
        </div>
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

export default VideoPage