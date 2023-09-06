player1_name = localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");
player1_score = 0;
player2_score = 0;
questionTurn = "player1";
answerTurn = "player2";




function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) *parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn-btn-info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value ="";
    document.getElementById("number2").value ="";
}

function check(){
    getAnswer = document.getElementById('input_check_box').value;
    if(getAnswer == actual_answer){
        if(answerTurn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("playerquestion").innerHTML = "Turno de pergunta:"+player2_name;
    }
    else{
        questionTurn = "player1";
        document.getElementById("playerquestion").innerHTML = "Turno de pergunta:"+player1_name;
    }
    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("playeranswer").innerHTML = "Turno de resposta:"+player2_name;
    }
    else{
        answerTurn = "player1";
        document.getElementById("playeranswer").innerHTML = "Turno de resposta:"+player1_name;
    }
    document.getElementById("output").innerHTML = "";   
}
