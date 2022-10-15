var elementButton = document.getElementById("getAdvice");
var elementAdvice = document.getElementsByClassName("advice")[0];

elementButton.addEventListener("click", function(e) {
    getAdvice();
});

async function getAdvice()
{
    let advice = await getData();
    elementAdvice.innerHTML = advice;
}
async function getData()
{
    let response = await fetch('https://api.adviceslip.com/advice',  {cache: "no-store"})
    .then((response) => response.json())
    .then((data) => {
        return data.slip.advice;
    });

    return response;
}