import React from "react";
import './index.less'

function ScoreTable(props) {
  let { record } = props
  let { playerName, list } = record

  let noScoreTd = []
  for (let i = list.length; i < 7; i++) {
    noScoreTd.push(<td key={i}>-</td>)
  }

  return (
    <div className="score-table">
        <table>
          <thead>
            <tr>
              <th style={{ height: "40px", width: "62px" }} >
              </th>
              <th>第1局</th>
              <th>第2局</th>
              <th>第3局</th>
              <th>第4局</th>
              <th>第5局</th>
              <th>第6局</th>
              <th>第7局</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th className="row-head">{playerName[0]}</th>
              {list.map((item, index) => {
                return (<td className={item.winSide !== 0 ? 'lose' : null} key={index}>
                  {item.result[0]}
                </td>)
              })}
              {noScoreTd}
            </tr>
            <tr>
            <th className="row-head">{playerName[1]}</th>
              {list.map((item, index) => {
                return (<td className={item.winSide !== 1 ? 'lose' : null} key={index}>
                  {item.result[1]}
                </td>)
              })}
              {noScoreTd}
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default ScoreTable;

