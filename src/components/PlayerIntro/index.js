import React,{useEffect,useState} from "react";
import './index.less'

function PlayerIntro(props) {
  let { player, match, score } = props
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [flag1, setFlag1] = useState('')
  const [flag2, setFlag2] = useState('')
  const [flagBg, setFlagBg] = useState('')

  const defaultIcon = 'static/avatar/默认.png'

  useEffect(() => {
    if (player) {
      let player1 = player[0][0], player2 = player[1][0]
      setPlayer1(player1)
      setPlayer2(player2)
      setFlag1(player1.nationalFlag)
      setFlag2(player2.nationalFlag)
    }
    if (match) {
      setFlagBg(match.nationalBG)
    }
    
  }, [player, match])



  return (
    <div className="player-intro">
      <div className="player-bg">
        <img className="flag-bg" src={flagBg} />

        <div className="player-bg-container">
          <div className="match-name">
            <div className="icon"></div>
            {match ? (<div>{match.competition}</div>) :null}
          </div>
          <div className="bg-head-groups">
            <div className="bg-head">
              <div className="bg-head-name">参赛成员</div>
              <div className="bg-head-ranking">WORD RANKING</div>
            </div>
            <div className="bg-head">
              <div className="bg-head-name">参赛成员</div>
              <div className="bg-head-ranking">WORD RANKING</div>
            </div>
          </div>
        </div>

        <div className="bg-intro-groups">
          <div className="bg-intro">
            <div className="bg-intro-country">{ match.countryEN[0] }</div>
            <img className="bg-intro-flag" src={flag1} alt="none" />
            <div className="bg-intro-name">{(player1 && player1.name) ? player1.name : '未知'}</div>
            <div className="bg-intro-ranking">{(player1 && player1.rank) ? player1.rank : '-'}</div>
          </div>
          <div className="bg-intro">
            <div className="bg-intro-country">{ match.countryEN[1] }</div>
            <img className="bg-intro-flag" src={flag2} alt="none" />
            <div className="bg-intro-name">{(player2 && player2.name) ? player2.name : '未知'}</div>
            <div className="bg-intro-ranking">{(player2 && player2.rank) ? player2.rank : '-'}</div>
          </div>
        </div>

      </div>

      <div className="player-score">
        <div className="player-info">
          <div className="player-info-name">{(player1 && player1.name) ? player1.name : '未知'}</div>
          <img id='icon' className="player-info-icon" src={(player1 && player1.icon) ? player1.icon : defaultIcon} alt='选手头像'
          onError={(e) => { e.target.onerror = null;e.target.src=defaultIcon}}/>
        </div>
        <div className="match-score">
          <div className="match-score-vs">VS</div>
          <div className="match-score-detail">
            <div className={score[0] > score[1] ? "score-highlight" : null}>{score[0]}</div>
            <div style={{margin:"0 20px"}}>-</div>
            <div className={score[1] > score[0] ? "score-highlight" : null}>{score[1]}</div>
          </div>
        </div>
        <div className="player-info">
          <div className="player-info-name">{(player2 && player2.name) ? player2.name : '未知'}</div>
          <img id='icon' className="player-info-icon" src={(player2 && player2.icon) ? player2.icon : defaultIcon} alt='选手头像'
            onError={(e) => { e.target.onerror = null;e.target.src=defaultIcon}} />
        </div>
      </div>
    </div>
  )
}

export default PlayerIntro;

