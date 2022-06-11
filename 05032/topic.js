var topic = [
    "停課-尚未開學",
    "停課-國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期=setMonth
    startDate.setMonth(startMonth-1,startDay);
    //設定歸零
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
let date =document.getElementsByTagName="input";
setMonthAndDay(document.body.input.val(),document.body.input.val());