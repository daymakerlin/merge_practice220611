let URL = [
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg"
    , "https://sweetamy.tw/wp-content/uploads/2021/08/IMG20210721122959-1-scaled.jpg"
    , "https://images.chinatimes.com/newsphoto/2020-03-12/656/20200312002373.jpg"
];

$(function () {
    // console.log("YO");
    $("input").on("click", function () {
        // alert("Hi");
        // $("h1").text($("li").eq(Math.floor(Math.random()*3)).text());
        // $("h1").text($("li").eq(Math.floor(Math.random()*($("li").length))).text());
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", URL[randomChildNumber]);
    });

});
function xxx() {

}