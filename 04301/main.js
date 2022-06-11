
document.body.style.color = "blue";
// document.body.style.backgroundImage = 'url('+"https://www.w3schools.com/cssref/paper.gif"+')';


let thisH1 = document.getElementsByTagName("h1")[0];
let thisButton = document.getElementsByTagName("button")[0];
thisButton.addEventListener("click",showAlert);
// let d = new Date();
let thisURL = ["https://www.w3schools.com/cssref/paper.gif",
"https://img.ltn.com.tw/Upload/news/600/2019/03/30/phpUCF6ub.jpg",
"https://www.popdaily.com.tw/u/202008/d74beaef-84ef-493c-b193-86bf407147b3.jpg"];
function showAlert(){
    document.body.style.backgroundImage ='url('+thisURL[Math.floor(Math.random()*thisURL.length)]+')';
    // document.body.style.backgroundImage = 'url('+imageURLs[Math.floor(Math.random()*imageURLs.length)] +')';

    // thisH1.innerHTML = Math.ceil(Math.random()*10);
    thisH1.innerHTML = Math.floor(Math.random()*10)+1;



    // let myFriends_string = "John,Marry,David";
    // let myFriends_array = myFriends_string.split(",");
    // thisH1.innerHTML = myFriends_array.join(" | ");
    // let myFriends = new Array("John","Marry","David",123);
    // let myFriends = ["John","Marry","David"];
    // myFriends[0] = "John";
    // myFriends[1] = "Marry";
    // myFriends[2] = "David";
    // myFriends[3] = 123;
    // thisH1.innerHTML = "["+myFriends[0]+"|"+myFriends[1]+"|"+myFriends[2]+"|"+myFriends[3]+"]";
    // console.log(typeof(myFriends));





    // thisH1.innerHTML = d.toLocaleString();
    // alert("h1");
    // alert("字串長度:"+thisH1.innerHTML.length+"\n"+
    //       "World在第"+thisH1.innerHTML.indexOf("World")+"位置"+"\n"+
    //       "第一個字"+thisH1.innerHTML.split(" ")[0]+"\n"+
    //       "第二個字"+thisH1.innerHTML.split(" ")[1]);

}