import React from 'react'
import keikan from '../keikan.json'

const ReadJson = () => {
  console.log(keikan[0][0]["団体コード"]);
  let output = <div>{keikan[0][0].団体コード}</div>;
  for(let i in keikan) {
    for(let j in keikan[i]) {
      for(let k in keikan[i][j]){
        console.log("i: " + i + " j: " + j + " k: " + k + ": " + keikan[i][j][k])
      }
    }
  }
  return (
    <table>
    <tbody>
      {
        keikan.map((items) =>
          items.map((item)  => {
            return (
              <>
              <tr><td>団体コード</td><td>{item["団体コード"]}</td></tr>
              <tr><td>団体名</td><td>{item["団体名"]}</td></tr>
              <tr><td>名称</td><td>{item["名称"]}</td></tr>
              <tr><td>概要文（補足説明）</td><td>{item["概要文（補足説明）"]}</td></tr>
              <tr><td>区分</td><td>{item["区分"]}</td></tr>
              <tr><td>場所_住所</td><td>{item["場所_住所"]}</td></tr>
              <tr><td>場所_緯度</td><td>{item["場所_緯度"]}</td></tr>
              <tr><td>場所_経度</td><td>{item["場所_経度"]}</td></tr>
              <tr><td>アクセス情報</td><td>{item["アクセス情報"]}</td></tr>
              <tr><td>駐車場情報</td><td>{item["駐車場情報"]}</td></tr>
              </>
            )
/*
            Object.keys(item).map((key) => {
              console.log(item[key])
              return (
                <tr><td>{item[key]}</td></tr>
              )
            })
*/
          })
        )
      }
      </tbody>
    </table>
  )
}

export default ReadJson;
