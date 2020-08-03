function populate() {
    if (quiz.Is_End()) {
        showScore();
    } else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getquestion_Index().text;

        // show options
        var choices = quiz.getquestion_Index().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("opt" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        show_progress();
    }
};

function show_progress() {
    var currentQue = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question  " + currentQue + " of " + questions.length;
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showScore() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    score = quiz.score;
    localStorage.setItem("Score", score);

    var element = document.getElementById("Quiz");
    var link = "<a href='certificate.html'>link</a>";
    element.innerHTML = gameOverHTML + "CLICK TO GET YOUR CERTIFICATE - " +
        link;


};
var questions = [
    new question("1.Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
    new question("2.Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new question("3.There are ____ main components of object oriented programming.", ["1", "6", "2", "4"], "4"),
    new question("4.Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new question("5.MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),

    new question("6.An applet is a ________ program.", ["Large", "Small", "Medium", "None of these"], "Small"),
    new question("7.______ refers to cmd that allow you run applets.", ["Sampledoc", "JavaViewer", "PackegeViewer", "AppletViewer"], "AppletViewer"),
    new question("8.  _________ denotes the variables that receive the values of the arguments passed into the method to provide the desired output.", ["Integer", "Parameters", "Instance variables", "object"], "Parameters"),
    new question("9. Applets use various mescorethods of _________ class and _______ class.", ["Applet, Graphics", "Applet, Image", "Image, Graphics", " None of these"], "Applet, Graphics"),
    new question("10.The execution of an applet begins from the ________ method.", ["init()", "init", "int", " None of these"], "init()"),

];
var quiz = new Quiz(questions);
populate();


// signup html page -----
function myFunction() {
    var x = document.getElementById("pass1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myFunction1() {
    var x = document.getElementById("pass2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function name1() {
    var n1 = document.getElementById("first").value;
    var n2 = document.getElementById("middle").value;
    var n3 = document.getElementById("last").value;
    localStorage.setItem("Name", n1);
    localStorage.setItem("Middle", n2);
    localStorage.setItem("Surname", n3);
    
};

//  get data to certifiacate from local storage
function get() {
    document.getElementById("name").innerHTML = localStorage.getItem("Name") + " " + localStorage.getItem("Middle") + " " + localStorage.getItem("Surname");
    document.getElementById("result").innerHTML = localStorage.getItem("Score");

}
