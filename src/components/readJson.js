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
              <tr><th>団体コード</th><td>{item["団体コード"]}</td></tr>
              <tr><th>団体名</th><td>{item["団体名"]}</td></tr>
              <tr><th>名称</th><td>{item["名称"]}</td></tr>
              <tr><th>概要文（補足説明）</th><td>{item["概要文（補足説明）"]}</td></tr>
              <tr><th>区分</th><td>{item["区分"]}</td></tr>
              <tr><th>場所_住所</th><td>{item["場所_住所"]}</td></tr>
              <tr><th>場所_緯度</th><td>{item["場所_緯度"]}</td></tr>
              <tr><th>場所_経度</th><td>{item["場所_経度"]}</td></tr>
              <tr><th>アクセス情報</th><td>{item["アクセス情報"]}</td></tr>
              <tr><th>駐車場情報</th><td>{item["駐車場情報"]}</td></tr>
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
