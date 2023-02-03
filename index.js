let score = 0;

const htmlScore = document.getElementById("score");

const holes = document.getElementsByClassName("hole");

function moleA() {
  const random = Math.floor(Math.random() * holes.length);
  holes[random].classList.toggle("mole");
}
setInterval(moleA, 400);

const gameArea = document.getElementById("whack-a-mole");
gameArea.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".mole")) {
    clickEvent.target.classList.remove("mole");
    score++;
    htmlScore.innerHTML = score;
  }
});
