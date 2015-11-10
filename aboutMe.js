alert("Welcome to my page");

var userName = "Sebastian";

function myFunction() {
  var txt;
  var question1 = prompt("Does your love for food take you to the most random places?");
    if (question1.toLowerCase() === "y" || question1.toLowerCase() === "yes") {
     txt = "You're on the right track, " + userName + " ! Making a food bucket list might encouragement your inner foodie to explore more.";
        }
    else if (question1.toLowerCase() === "n" || question1.toLowerCase() === "no") {
     txt = "Be adventures " + userName + " sometimes the best food is found at the hole in the wall down the street.";
    }
    else {
     txt = "The best food experiences are the one's you never plan " + name;
    }
    document.getElementById("demo").innerHTML = txt;
}

function myFunction2() {
  var txt2;
  var question2 = prompt("Have you ever been to San Francisco?");
    if (question2.toLowerCase() === "y" || question2.toLowerCase() === "yes") {
      txt2 = userName + " you get around don't you!";
      }
    else if (question2.toLowerCase() === "n" || question2.toLowerCase() === "no") {
      txt2 = userName + " if you ever find yourself there a must see is Crissy Field.";
     }
    else {
      txt2 = userName + " one times is all it takes to fall in love with San Francisco.";
     }
    document.getElementById("demo2").innerHTML = txt2;
}

function myFunction3() {
  var txt3;
  var question3 = prompt("Based on my images do you think I'm from California");
    if (question3.toLowerCase() === "y" || question3.toLowerCase() === "yes") {
      txt3 = userName + " they don't call it the golden state for nothing.";
      }
    else if (question3.toLowerCase() === "n" || question3.toLowerCase() === "no") {
      txt3 = userName + " the Golden Gate Bridge didn't' give it away?";
      }
    else {
      txt3 = userName + " Washington would have been just a good a guest.";
      }
      document.getElementById("demo3").innerHTML = txt3;
}

function myFunction4() {
  var txt4;
  var question4 = prompt("Do you love croissant?");
    if (question4.toLowerCase() === "y" || question4.toLowerCase() === "yes") {
      txt4 = userName + " they are savory and sweet all at the same time.";
      }
    else if (question4.toLowerCase() === "n" || question4.toLowerCase() === "no") {
      txt4 = userName + " think about what pastry you couldn't live without?";
      }
    else {
      txt4 = userName + " there isn't a pastry I haven't met I didn't like.";
      }
      document.getElementById("demo4").innerHTML = txt4;
}

function myFunction5() {
  var txt5;
  var question5 = prompt("How many times a day do you have coffee?");
    if (question5 <= 2 ) {
      txt5 = userName + " that's pretty minimal for a Seattleite.";
      }
    else if (question5 >= 3 && question5 <= 7) {
      txt5 = userName + " whoa you should slow down.";
      }
    else {
      txt5 = userName + " I'm hope you have medicinal reasons for that much caffeine.";
      }
      document.getElementById("demo5").innerHTML = txt5;
}

/*

var question1 = alert("Does your love for food take you to the most random places?");
    console.log(question1);
    if (question1.toLowerCase() === "y" || question1.toLowerCase() === "yes") {
      alert("The best food experiences are the one's you never plan " + name);
        }
    else if (question1.toLowerCase() === "n" || question1.toLowerCase() === "no") {
      alert("Be adventures " + userName + " sometimes the best food is found at the hole in the wall down the stree");
    }
    else {
      alert("Youre on the right track, " + userName + " ! Making a food bucket list might encouragment your inner foodie to explore");
    }

var question2 = prompt("Have you ever been to San Francisco?");
    console.log(question2);
    if (question2.toLowerCase() === "y" || question2.toLowerCase() === "yes") {
      alert(userName + " you get around don't you!");
      }
    else if (question2.toLowerCase() === "n" || question2.toLowerCase() === "no") {
      alert(userName + " if you ever find yourself there a must see is Crissy Field");
     }
    else {
      alert(userName + " one times is all it takes to fall in love with San Francisco");
     }

var question3 = prompt("Based on my images do you think I'm from California");
    console.log(question3);
    if (question3.toLowerCase() === "y" || question3.toLowerCase() === "yes") {
      alert(userName + " they don't call it the golden state for nothing");
      }
    else if (question3.toLowerCase() === "n" || question3.toLowerCase() === "no") {
      alert(userName + " the Golden Gate Bridge didnt' give it away?");
      }
    else {
      alert(userName + " Washington would have been just a good a guest");
      }

var question4 = prompt("Do you love corissant?");
    console.log(question4);
    if (question4.toLowerCase() === "y" || question4.toLowerCase() === "yes") {
      alert(userName + " they are savory and sweet all at the same time");
      }
    else if (question4.toLowerCase() === "n" || question4.toLowerCase() === "no") {
      alert(userName + " think about what pastery you couldn't live without?");
      }
    else {
      alert(userName + " there isn't a pastery I haven't met I didn't like");
      }

var question5 = prompt("How many times a day do you have coffee");
    console.log(question5);
    if (question5 <= 2 ) {
      alert(userName + " that's pretty miniual for a Seattlite");
      }
    else if (question5 >= 3 && question5 <= 7) {
      alert(userName + " whooo you should slow down");
      }
    else {
      alert(userName + " I'm hope you have medicinal reasons for that much caffine");
      }

      console.log(question1);
      console.log(question2);
      console.log(question3);
      console.log(question4);
      console.log(question5);
      */


