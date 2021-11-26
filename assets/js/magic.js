var attemps = 0;
var element = document.getElementById("wisegoat");

element.addEventListener("click", function(e) {
    attemps += 1;
    element.classList.remove('illustrationIn');
    
    element.classList.add('illustrationOut');

    if(attemps > 2) { alert("OOOOOOH! DON'T TOUCH ME, BRO!"); attemps = 0 ;}

    window.setTimeout(function() {
        element.classList.add('illustrationIn');
      }, 2500);
});