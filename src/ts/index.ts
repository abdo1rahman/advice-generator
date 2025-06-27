const adviceElement = document.getElementById("advice");
const adviceNo = document.getElementById("advice-no");
const dice = document.getElementById("btn");

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const json = await res.json();
  return json.slip;
}

async function renderAdvice() {
  if (!adviceElement || !adviceNo || !dice) {
    console.warn("Missing DOM elements.");
    return;
  }

  const result = await getAdvice();
  adviceElement.textContent = "❝" + result.advice + "❞";
  adviceNo.textContent = `ADVICE #${result.id}`;
}

window.addEventListener("load", renderAdvice);
dice?.addEventListener("click", () => {
  renderAdvice();
  dice.classList.remove('clicked'); // reset animation if already added
  void dice.offsetWidth;            // trigger reflow (forces reset)
  dice.classList.add('clicked');    // apply animation
});

