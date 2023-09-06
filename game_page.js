player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;
questionTurn = "player1";
answerTurn = "player2";

document.getElementById("player1name").innerHTML = player1name + ":  ";
document.getElementById("player2name").innerHTML = player2name + ":  ";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerquestion").innerHTML = "Turno de pergunta: " +player1name;
document.getElementById("playeranswer").innerHTML = "Turno de resposta: " +player2name;

function send(){
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log("palavra = "+ word);
    charat1 = word.charAt(1);
    lenghtDivide2 = Math.floor(word.length/2);
    charat2 = word.charAt(lenghtDivide2);
    lengthminus1 = word.length - 1;
    charat3 = word.charAt(lengthminus1);
    removecharat1 = word.replace(charat1,"_");
    removecharat2 = removecharat1.replace(charat2,"_");
    removecharat3 = removecharat2.replace(charat3,"_");
    console.log("removecharAt3");
    question_word = "<h4 id='wordDisplay'> P. "+removecharat3+"</h4>"; 
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
     checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + inputBox + checkButton ;
     document.getElementById("output").innerHTML = row;
     document.getElementById("word").value = "";

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
