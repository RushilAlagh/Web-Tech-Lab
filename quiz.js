
var questionBank= [
    {
        question : 'How many teams have won the World Cup since its inception in 1930?',
        option : ['8', '7', '5', '4'],
        answer : '8'
    },
    {
        question : 'Brazil has the most number of World Cup titles to its credit. How many times has it won the World Cup so far?',
        option : ['5','4','7','6'],
        answer : '5'
    },
    {
        question : 'In which year was the football World Cup held for the first time? ',
        option : ['1928','1930','1924','1932'],
        answer : '1930'
    },
    {
        question : 'Which country won the first football World Cup?',
        option : ['Brazil','Germany','Uruguay','Argentina'],
        answer : 'Uruguay'
    },
    {
        question : 'In which country are the headquarters of FIFA (International Federation of Association Football) located?',
        option : ['Switzerland','Brazil','France','Netherlands'],
        answer : 'Switzerland'
    },
    {
        question : 'Who has the record for scoring the most goals in World Cup history?',
        option : ['Ronaldo','Diego Maradona','Miraslav Klose','Lionel Messi'],
        answer : 'Miraslav Klose'
    },
    {
        question : "Who of the following won the World Cup both as the captain and manager of his country's team?",
        option : ['Diego Maradona','Mario Zagallo','Jupp Derwall','Franz Beckenbaur'],
        answer : 'Franz Beckenbaur'
    },
    {
        question : 'Which trophy was awarded to the winners of World Cup tournament until 1970?',
        option : ['Arsenal Trophy','Heisman Trophy','Grondona Cup','Jules Rimet Trophy'],
        answer : 'Jules Rimet Trophy'
    },
    {
        question : "In which year was the FIFA Women's World Cup held for the first time?",
        option : ['1981','1986','1991','1996'],
        answer : '1991'
    },
    {
        question : "Which country hosted the first FIFA Women's World Cup?",
        option : ['Sweden','China','USA','Norway'],
        answer : 'China'
    },
    {
        question : "Which country won the first FIFA Women's World Cup?",
        option : ['Brazil','Germany','Japan','USA'],
        answer : 'USA'
    },
    {
        question : 'Which of the following is awarded to the top goalscorer at the World Cup tournament?',
        option : ['Golden Ball','Silver Ball','Golden Boot','Golden Glove'],
        answer : 'Golden Boot'
    },
    {
        question : "In which year was the Ballon d'Or first given?",
        option : ['1956','1958','1960','1961'],
        answer : '1956'
    },
    {
        question : "Which of the following instituted the ?Ballon d'Or Award?",
        option : ['World Soccer (Magazine)','FIFA','France Football (Magazine)','ESPN (TV Channel)'],
        answer : 'France Football (Magazine)'
    },
    {
        question : 'How many players are there on each side in the indoor version of football namely Futsal?',
        option : ['11','9','7','5'],
        answer : '5'
    },
    {
        question : 'My Life and the Beautiful Game is the autobiography of which of these footballers?',
        option : ['Lionel Messi','Pele','Ronaldo','Michel Platini'],
        answer : 'Pele'
    },
    {
        question : 'Which country organises the Merdeka Cup football tournament to commemorate its independence?',
        option : ['Malaysia','Brazil','France','Netherlands'],
        answer : 'Malaysia'
    },
    {
        question : "In which year was men's football introduced in the Olympic Games?",
        option : ['1900','1904','1908','1920'],
        answer : '1900'
    },
    {
        question : 'In which year was the UEFA European Football Championship (Euro) first held?',
        option : ['1960','1955','1962','1963'],
        answer : '1960'
    },
    {
        question : 'Which footballer is associated with scoring the Goal of the Century?',
        option : ['Diego Maradona','Lionel Messi','Cristiano Ronaldo','Neymar Jr'],
        answer : 'Diego Maradona'
    }
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var celebrateButton = document.getElementById('celebrateButton');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q'+(i+1)+'. '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length + "\nRETRY!";
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
        if(score === 5)
        celebrate();
}}

next.addEventListener('click',nextQuestion);

function backToQuiz(){
    location.reload();
}

function celebrate() {
    alert("Congratulations Birthday girl! Time to celebrate!");
    window.location.href = 'celebrate.html';
}

function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();