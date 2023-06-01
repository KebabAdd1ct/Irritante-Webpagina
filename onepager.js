      //Hierdoor zal er geluid afspelen wanneer je over de button gaat hooveren
      function changeColor() {
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'pink', 'purple'];
        var currentIndex = 0;
        var body = document.querySelector('body');
  
        setInterval(function() {
          body.style.backgroundColor = colors[currentIndex];
          currentIndex = (currentIndex + 1) % colors.length;
        }, 10); 
      }
      //Hierdoor spelen meerdere geluiden af wanneer je de button klikt
      function playSounds() {
        var audio1 = document.getElementById("sound1");
        var audio2 = document.getElementById("sound2");
        var audio3 = document.getElementById("sound3");
        var audio4 = document.getElementById("sound4");
        var audio5 = document.getElementById("sound5");
        var audio6 = document.getElementById("sound6");

        audio1.play();
        audio2.play();
        audio3.play();
        audio4.play();
        audio5.play();
        audio6.play();

      }

  //Hierdoor verandert de linkerkant van de onepager snel van kleur wanneer je de knop klikt
  var intervalId;
  var colors = ["white", "orange", "yellow", "blue", "green", "purple", "pink"];
  var currentIndex = 0;

  function startColorChange() {
  var div = document.getElementById("storyleft");
  clearInterval(intervalId); 

  intervalId = setInterval(function() {
  div.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 2) % colors.length; 
}, 10); 
}
//Dit zorgt ervoor dat overal waar je ook maar klikt (behalve de knop) je stuurt naar een leuk filmpje
function goToYouTube() {
  if (event.target.id !== "button")
  window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
}
//Hierdoor komt de pop-up wanneer je de knop drukt
function showPopup() {
  window.alert("Als je hiernaar kijkt ben je me 5 euro verschuldigt"); 
}
//Hierdoor is het wat moeilijker om weg te gaan van de webpagina
function lockTab() {
  window.onbeforeunload = function() {
    return "Als ik je voor de tweede keer erin heb laten trappen dan voel ik me best schuldig dus hier is een leuk filmpje: https://www.youtube.com/watch?v=BBJa32lCaaY";
  };
} 
      
      
      
      
      
      
      