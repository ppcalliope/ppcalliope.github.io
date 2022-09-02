import React, { useState,useEffect,useRef } from "react";
import { Button } from 'antd'
import Swiper from 'react-id-swiper';
import VideoJS from "../../components/VideoPlayer";
import '../VideoPage/index.less'

function getPointDatas(video,rallys) {
  let pointDatas = []
  if (video && rallys && rallys.length > 0) {
    rallys.map((item, index) => {
      let roundIndex = item[0], pointIndex = item[1]
      let roundDetails = video[roundIndex].details
      let roundScore = video[roundIndex].score
      pointDatas.push({ roundScore,...roundDetails[pointIndex] })
      return null
    })
  }
  return pointDatas
}

const JumpPage = (props) => {
  const { data, scoreData } = props
  const { videoUrl, video, playerName } = data

  const playerRef = useRef(null);
  const [name, setName] = useState('')
  const [stage,setStage] = useState('发球得分')
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
    if (scoreData) {
      const { rallys, name, stage } = scoreData
      setName(name)
      setStage(stage)
      setPointDatas(getPointDatas(video,rallys))
    }
  },[scoreData])
  
  useEffect(() => {
    if (pointDatas) {
      let n = pointDatas.length
      let cur = [], total = []
      for (let i = 0; i < n; i++) {
        if (cur.length < 15) {
          cur.push(pointDatas[i])
        } else {
          total.push(cur)
          cur = [pointDatas[i]]
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
                }}>
                  <div className="dot-1" style={{visibility: item.winSide===0 ? 'visible' :'hidden'}}></div>
                  <div>{item.score[0]} </div>
                  <div className="rally-score">{ item.roundScore[0] }:{ item.roundScore[1] }</div>
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

  let subtitleText = document.getElementById("jump-page-subtitle-text");
  if (subtitleText) {
    const width = subtitleText.clientWidth || subtitleText.offsetWidth;
    if (width < 215) {
      let subtitle = document.getElementById("jump-page-subtitle")
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
      <div className="mobile-subtitle" id="jump-page-subtitle">
        <div id="jump-page-subtitle-text">{name}{stage}视频信息</div>
      </div>
      <div className="video-rally-group" />

      <div className="video-container">
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

export default JumpPage