$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;
    //1 sec = 1000 ms
    //計算一天的秒數量
    let millisecsPerDay = 24*60*60*1000;
    for ( var x=0; x<topicCount; x++){
        // $("#courseTable").append(
        //     "<tr>"+
        //     // 使用‵`放變數
        //     `<td>${x+1}</td>`+
        //     `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td>`+
        //     `<td>${topic[x]}</td>`+
        //     "</tr>"
        // );
        $("#courseTable").append(
            `<tr><td>${x+1}</td><td>${new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`);
        
    }
});
