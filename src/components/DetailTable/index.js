import React,{useEffect} from "react";
import './index.less'

// 三段法表格

function DetailTable(props) {
  let { position, data, setScoreData, swiper } = props
  let { playerName, win, lose, scoreRate, useRate } = data
  

  function toPercent(point){
		var percent = Number(point*100).toFixed(1);
		percent += "%";
		return percent;
  }

  const stageMap = {
    0: '发球',
    1: '第三拍',
    2: '接发球',
    3: '第四拍',
    4: '发球轮相持',
    5: '接发球轮相持'
  }
  

  useEffect(() => {
    if (data && setScoreData && position==0) {
      setScoreData({ rallys: win[0].rallys, name: playerName, stage: stageMap[0]+'得分' })
    }
  },[])
  
  return (
    <div className="detail-table">
      <div className={"detail-table-container-" + (position)}>
        <table>
          <thead>
            <tr>
              <th className="name" rowSpan="2" colSpan="1" >
                {playerName}
              </th>
              <th rowSpan="1" colSpan="2">
                发球抢攻段
              </th>
              <th rowSpan="1" colSpan="2" >
                接发球抢攻段
              </th>
              <th rowSpan="1" colSpan="2" >
                相持段
              </th>
              <th style={{ width: "44px" }} rowSpan="2" colSpan="1" >
                合计
              </th>
            </tr>
            <tr className="second-head" >
              <th>发球</th>
              <th>第三拍</th>
              <th>接发球</th>
              <th>第四拍</th>
              <th style={{ width: "38px" }}>发球轮相持</th>
              <th style={{ width: "44px" }}>接发球轮相持</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="row-head">得分</th>
                {win.map((item, index) => {
                  return (<td key={index} onClick={() => {
                    if (item.count > 0) {
                      setScoreData({ rallys: item.rallys, position, name: playerName, stage:stageMap[index]+'得分'})
                      swiper.current.swiper.slideTo(4)
                    }
                }}>{item.count}</td>)
                })}
            </tr>
            <tr>
              <th className="row-head">失分</th>
                {lose.map((item, index) => {
                  return (<td key={index} onClick={() => {
                    if (item.count > 0) {
                      setScoreData({ rallys: item.rallys, position, name: playerName, stage:stageMap[index]+'失分'})
                      swiper.current.swiper.slideTo(4)
                    }
                }}>{item.count}</td>)
                })}
            </tr>
            <tr>
              <th className="row-head">得分率</th>
              {scoreRate.map((item,index) => {
                if (index < 3) {
                  return (<td colSpan="2" className={item.color ? "highlight-" + (position) : null} key={index}>
                    {toPercent(item.rate)}
                  </td>)
                } else if (index === 3) {
                  return (<td className={item.color ? "highlight-" + (position) : null} key={index}>
                    {toPercent(item.rate)}
                  </td>)
                } else {
                  return null
                }
              })}
            </tr>
            <tr>
              <th className="row-head">使用率</th>
              {useRate.map((item,index) => {
                if (index < 3) {
                  return (<td colSpan="2" key={index}>
                    {toPercent(item)}
                  </td>)
                } else if (index === 3) {
                  return (<td key={index}>{toPercent(item)}</td>)
                } else {
                  return null
                }
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DetailTable;

