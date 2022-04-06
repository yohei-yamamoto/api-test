<?php

//$apiUrl = 'https://opendata.pref.saitama.lg.jp/data/dataset/a944a0c6-57ef-4729-8784-31fef61c25f0/resource/df303304-4109-4628-b916-3cbf9905eb53/download/yurukyara-niiza.csv';
$apiUrl = 'https://opendata.pref.saitama.lg.jp/data/dataset/834422f0-2019-4099-9753-6fe3b873934d/resource/038fc9f0-e564-4018-a139-6ad58f1f45e4/download/keikan-niiza.csv';

$fp = fopen($apiUrl, 'r');

//$csvData = unserialize(stream_get_contents($fp));
$csvData = mb_convert_encoding(file_get_contents($apiUrl), "UTF-8", "SJIS");
print_r($csvData);


$contentArray = preg_split('/\n/', $csvData, -1, PREG_SPLIT_OFFSET_CAPTURE);

$columns = [];  //カラム名リスト用

$maps = [];     //JSON変換用

for($i1 = 0; $i1 < count($contentArray); $i1++){

    if (count($contentArray[$i1]) > 0){ if (strlen($contentArray[$i1][0]) > 0){

        $lineArray = [];    //1行だけ配列でまとめる

        //列取得 count($line) = 2

        echo $contentArray[$i1][0] . "\n";

        //1行をカンマ区切りを配列に変える

        $col = preg_split('/,/', $contentArray[$i1][0], -1, PREG_SPLIT_OFFSET_CAPTURE);

        for($i2=0; $i2< count($col); $i2++){

            $d1 = trim($col[$i2][0]);

            if (strlen($d1) > 0){//カラム1個づつ取り出して出力

                echo "Column" . $i . " = " . $d1 . " | ";

                switch($i1){

                case 0:

                    //1行目はカラム名

                    array_push($columns,$d1);

                    break;

                default:

                    //2行目からは、データとして扱う

                    array_push($lineArray, array($columns[$i2] => $d1));

                }

            }

        }

        echo "\n";

        if (count($lineArray) > 0){

            array_push($maps, $lineArray);

        }

    }}

}

echo "---- 配列の中身 ----\n";

var_dump($maps);

echo "---- json ----\n";

echo json_encode($maps, JSON_UNESCAPED_UNICODE) . "\n";

file_put_contents('./keikan.json', json_encode($maps, JSON_UNESCAPED_UNICODE))

 ?>
