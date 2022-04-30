const cacodemon = document.getElementById("cacodemon");
const rocket = document.getElementById("rocket");
const score = document.getElementById("score");

function jump() 
{
  cacodemon.classList.add("jumpAnimation");
  setTimeout(() =>
    cacodemon.classList.remove("jumpAnimation"), 625);
} 

document.addEventListener('keypress', (event) => 
{
  if (!cacodemon.classList.contains('jumpAnimation') && event.key == " ") {
    jump();
  }
})

setInterval(() => 
{
  const cacodemonTop = parseInt(window.getComputedStyle(cacodemon).getPropertyValue('top'));
  const rocketLeft = parseInt(window.getComputedStyle(rocket).getPropertyValue('left'));
  score.innerText++;

  if (rocketLeft < 100 && cacodemonTop > 0) {
    alert("You got a score of: " + score.innerText + "\n\nPlay again?");
    location.reload();
  }
}, 50);