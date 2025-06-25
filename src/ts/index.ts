import { animate } from "motion";

async function getAdvice(): Promise<string> {
  const res = await fetch("https://api.adviceslip.com/advice");
  const json = await res.json();
  return json.slip.advice;
}

const adviceElement = document.getElementById("advice");

window.addEventListener("load", async () => {
  const advice = await getAdvice();
  const adviceElement = document.getElementById("advice");
  if (adviceElement) {
    adviceElement.textContent = advice;
  }
});


// Example inside an event listener
document.getElementById("btn")?.addEventListener("click", async () => {
  const advice = await getAdvice();
  if (adviceElement) {
    adviceElement.textContent = advice;
  }
});
