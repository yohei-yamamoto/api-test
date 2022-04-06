import React from 'react'
import keikan from '../keikan.json'

const ReadJson = () => {
  console.log(keikan[0][0]);
  let output = <div>{keikan[0][0].団体コード}</div>;
  for(let i in keikan) {
    for(let j in keikan[i]) {
      for(let k in keikan[i][j]){
        console.log(k + ": " + keikan[i][j][k])
      }
    }
  }
  return (
    output
  )
}

export default ReadJson;
