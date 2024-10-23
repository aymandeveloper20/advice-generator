async function generateAdvice() {
  let random = Math.random() * 120;
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${random}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const advice = await response.json();
    display(advice.slip);
  } catch (error) {
    console.log(error);
  }
}
function display(slip) {
  let adviceText = document.getElementById("advice-text");
  let adviceNumber = document.getElementById("advice-number");

  adviceText.innerHTML = slip.advice;
  adviceNumber.innerHTML = slip.id;
}
