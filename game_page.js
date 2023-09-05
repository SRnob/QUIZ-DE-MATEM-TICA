player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;
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
    getAnswer = document.getElementById('inputCheckBox').value;
    answer = getAnswer.toLowerCase();
    console.log("resposta = "+ answer);
    if(answer == word){
        if(answerTurn == "player1"){
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else{
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("playerquestion").innerHTML = "Turno de pergunta:"+player2name;
    }
    else{
        questionTurn = "player1";
        document.getElementById("playerquestion").innerHTML = "Turno de pergunta:"+player1name;
    }
    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("playeranswer").innerHTML = "Turno de resposta:"+player2name;
    }
    else{
        answerTurn = "player1";
        document.getElementById("playeranswer").innerHTML = "Turno de resposta:"+player1name;
    }
    document.getElementById("output").innerHTML = "";   
}
