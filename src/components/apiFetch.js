import React, {useState, useEffect} from 'react'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])
    const myHeaders = new Headers({'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANQiagEAAAAAkFA6%2BpSk6hNXn12BXteLYWqlp6M%3DExJoPRaPElqSArYqzoRKWaA8nSpQQIS59joF8UBehwspYyzGkT',
      'hoge': 'huga'});

    const td = new TextDecoder("Shift_JIS")
    useEffect(() => {
//      fetch('https://jsonplaceholder.typicode.com/posts', {
//        fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json', {
        fetch('https://opendata.pref.saitama.lg.jp/data/dataset/a944a0c6-57ef-4729-8784-31fef61c25f0/resource/df303304-4109-4628-b916-3cbf9905eb53/download/yurukyara-niiza.csv', {
        //fetch('https://api.twitter.com/2/tweets/1279219682080423937', {
          //method: 'GET',
          mode: 'no-cors'
        })
//          .then(res => res.json())
        .then(res => res.arrayBuffer())
        .then(ab => td.decode(ab))
        .then(text => convert_array(text))
        .then(data => {
            setPosts(data)
        })

    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>

        </div>
    )
}

function convert_array(csv_data)
{
  console.log(csv_data);
    let data_array = [];
    const data_string = csv_data.split('\n');
    for (let i = 0; i < data_string.length; i++) {
        data_array[i] = data_string[i].split(',');
    }
    console.log(data_array);
    return data_array;
}

export default ApiFetch
