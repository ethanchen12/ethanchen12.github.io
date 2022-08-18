// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Hello!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('My name is Ethan Chen.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I am an aspiring.....")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Software Engineer.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Data Analyst.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Data Engineer.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Data Scientist.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("UX designer.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .deleteAll()
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}


// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("each-project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

