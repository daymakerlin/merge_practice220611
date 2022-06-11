$(function(){
    var currentQuiz = null;
    $("#startButton").on("click",function(){
        //按下按鈕要做的事
        if(currentQuiz==null){
            //從0開始作答
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //第二次作答要清空，否則會記錄第一次作答的結果
            $("#options").empty();
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });
            //下一步按鈕
            $("#startButton").attr("value","Next");
        }else{
            //已經開始作答
            //哪一個選項被選取了(i=index,val=value)
            $.each($(":radio"),function(i, val){
                if(val.checked){
                    //Nan=not a number
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        //已經要通往最終結果了(A~D)
                        //確定他不是數字後為最終結果
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startButton").attr('value','重新開始');
                    }else{
                        //正常跳下一題
                        //原始資料從1開始所以要-1
                        currentQuiz =questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element, index, array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });


                    }
                    return false;
                }

            });
        }
    })
});