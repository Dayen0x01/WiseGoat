var elementButton = document.getElementById("getAdvice");
var elementAdvice = document.getElementsByClassName("advice")[0];

elementButton.addEventListener("click", function(e) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.adviceslip.com/advice", false ); 
    xmlHttp.send( null );
    let json = JSON.parse(xmlHttp.responseText);
    let advice = json.slip.advice;
    
    elementAdvice.innerHTML = advice;
});