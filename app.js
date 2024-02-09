let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColour();
    h3.innerText = randomColor;
    h3.style.color = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

let getRandomColour = function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
};
