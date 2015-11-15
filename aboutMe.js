var userName = prompt("Welcome to my page, what is your name?");
document.getElementById("questions");

var answers = ["yes","y","no","n"];
var questions = ['Does your love for food take you to the most random places?'];
questions[1]= "Have you ever been to San Francisco?";
questions[2]= "Based on my images do you think I'm from California?";
questions[3]= "Do you love croissant?";


function myFunction() {
  var txt;
  var question1 = prompt(questions[0]);
   if (question1.toLowerCase() === answers[0] || question1.toLowerCase() === answers[1]){
     txt = " You're on the right track, " + userName + " ! Making a food bucket list might encouragement your inner foodie to explore more.";
     pic ='<img src="http://static.caloriecount.about.com/images/medium/cream-fluid-light-coffee-158349.jpg"/>'
        }
    else if (question1.toLowerCase() === answers[2] || question1.toLowerCase() === answers[3]){
     txt = " Be adventures " + userName + " sometimes the best food is found at the hole in the wall down the street.";
     pic = '<img src="http://cdn.somegames.org/c/sgo/cover/72/adventure-time-jumping-finn/adventure-time-jumping-finn.jpg?v=1417486780"/>'
    }
    else {
     txt = " The best food experiences are the one's you never plan " + name;
     pic = '<img src="https://s-media-cache-ak0.pinimg.com/236x/8b/23/59/8b23595722eb67eadb2a196a6ba4f4c7.jpg"/>'
    }
    document.getElementById("demo").innerHTML = pic + txt;
}

function myFunction2() {
  var txt;
  var question2 = prompt(questions[1]);
    if (question2.toLowerCase() === answers[0] || question2.toLowerCase() === answers[1]) {
      txt = userName + " you get around don't you!";
      pic = '<img src="http://www.san-francisco-travel-secrets.com/images/san-francisco-things-to-do-04.jpg"/>'
      }
    else if (question2.toLowerCase() === answers[2] || question2.toLowerCase() === answers[3]) {
      txt = userName + " if you ever find yourself there a must see is Crissy Field.";
      pic = '<img src="http://o.aolcdn.com/dims-global/dims/ABOUTME/5/200/200/100/http://d3mod6n032mdiz.cloudfront.net/thumb2/r/o/g/rogerbrown/rogerbrown-840x560.jpg"/>'
     }
    else {
      txt = userName + " one times is all it takes to fall in love with San Francisco.";
      pic = '<img src="https://qph.is.quoracdn.net/main-thumb-t-1437613-200-zraegqyzmxmnewxpmsceprxrnktghjle.jpeg"/>'
     }
    document.getElementById("demo2").innerHTML = pic + txt;
}

function myFunction3() {
  var txt;
  var question3 = prompt(questions[2]);
    if (question3.toLowerCase() === answers[0] || question3.toLowerCase() === answers[1]) {
      txt = userName + " they don't call it the golden state for nothing.";
      pic = '<img src="https://qph.is.quoracdn.net/main-thumb-t-835-200-muatfkhhqbyswgzdnyhkppdiiasquzpt.jpeg"/>'
      }
    else if (question3.toLowerCase() === answers[2] || question3.toLowerCase() === answers[3]) {
      txt = userName + " the Golden Gate Bridge didn't' give it away?";
      pic = '<img src="https://qph.is.quoracdn.net/main-thumb-t-835-200-muatfkhhqbyswgzdnyhkppdiiasquzpt.jpeg"/>'
      }
    else {
      txt = userName + " Washington would have been just a good a guest.";
      pic = '<img src="http://www.acog.org/-/media/Education-and-Events/2015Seattle.jpg?la=en"/>'
      }
      document.getElementById("demo3").innerHTML = pic + txt;
}

function myFunction4() {
  var txt;
  var question4 = prompt(questions[3]);
    if (question4.toLowerCase() === answers[0] || question4.toLowerCase() ===  answers[1]) {
      txt = userName + " they are savory and sweet all at the same time.";
      pic = '<img src="http://www.recipe4living.com/assets/itemimages/200/200/3/default_efac19f619ba219836d1c8bdd23bd4db_MeatballCroissantSandwichLettuceTomatoCheese.jpg"/>'
      }
    else if (question4.toLowerCase() === answers[2] || question4.toLowerCase() === answers[3]) {
      txt = userName + " think about what pastry you couldn't live without?";
      pic = '<img src="http://www.decosee.com/picture/beautiful-red-bakery-shop-200x200.jpg"/>'
      }
    else {
      txt = userName + " there isn't a pastry I haven't met I didn't like.";
      pic = '<img src="http://rs755.pbsrc.com/albums/xx195/skez520mia/HAPPY%20BIRTHDAY/gifgarfield-taart_Zer0.jpg~c200"/>'
      }
      document.getElementById("demo4").innerHTML = pic + txt;
}

function myFunction5() {
  var txt;
  var question5 = prompt("How many times a day do you have coffee?");
    if (question5 <= 2 ) {
      txt = userName + " that's pretty minimal for a Seattleite.";
      pic = '<img src="http://rs77.pbsrc.com/albums/j55/Nolamom/Posters/Coffee/decafproblem.jpg~c200"/>'
      }
    else if (question5 >= 3 && question5 <= 7) {
      txt = userName + " whoa you should slow down.";
      pic = pic = '<img src="http://i.gr-assets.com/images/S/photo.goodreads.com/books/1429364541i/25146075._UY200_.jpg"/>'
      }
    else {
      txt = userName + " I'm hope you have medicinal reasons for that much caffeine.";
      pic = '<img src="http://www.hdwallpapersnew.net/wp-content/uploads/2015/03/3D-ninja-Cartoon-high-quality-wallpaper-download-free-200x200.jpg"/>'
      }
      document.getElementById("demo5").innerHTML = pic + txt;
}



