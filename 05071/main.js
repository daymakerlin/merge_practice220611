let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray - 決定地圖中每個格子的元素
//ctx - HTML5 Canvas用
//currentImgMainX, currentImgMainY - 決定主角所在座標
//imgMountain, imgMain, imgEnemy - 障礙物, 主角, 敵人的圖片物件
const gridLength = 200;
//網頁載入完成後初始化動作
$(function(){
    mapArray = [ //0-可走,1-障礙,2-終點,3-敵人
    [0,1,1],
    [0,0,0],
    [3,1,2]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
    "x":0,
    "y":0
    };
    imgMain.onload = function(){
        //圖的長寬80,130(可用小畫家去看每一個人物的長寬)
    ctx.drawImage(imgMain, 0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    };
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    imgMountain.onload =function(){
        imgEnemy.onload = function(){
            for(var x in mapArray){
                for(var y in mapArray[x]){
                    if(mapArray[x][y]==1){
                        ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                    }else if(mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                    }
                }
            }
        }
    }
});
//處理使用者按下按鍵
$(document).on("keydown", function (event) {
    let targetImg, targetBlock, cutImagePositionX;
    //1.先判斷使用者按了什麼
    //2.判斷目標位置那一格是什麼
    //3.決定要做的事情(只是轉頭/可以過去/..)
    targetImg ={ //Canvas(x,y)
        "x":-1,  //-1不符合位置(0,200,400)就不會出現
        "y":-1
    }
    targetBlock ={ //Data-2D array
        "x":-1,
        "y":-1
    }

    event.preventDefault();

    switch(event.code){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x -gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUP":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y -gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x +gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x ;
            targetImg.y = currentImgMain.y +gridLength;
            cutImagePositionX = 0;
            break;
        default:  //如果按其他東西
            return;
    }
    if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 && targetImg.y>=0){
        targetBlock.x = targetImg.y/gridLength;
        targetBlock.y = targetImg.x/gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }

    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    if(targetBlock.x !=-1 && targetBlock.y !=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0: //OK
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1: //Mountain
                $("#talkBox").text("有山");
                break;
            case 2: //終點
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3: //敵人
                $("#talkBox").text("Hello");
                break;
        }
    }else{
        $("#talkBox").text("邊界");
    }

    //Re-Draw the Main
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    });
