const btnComponent = document.querySelector(".btn");

btnComponent.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnComponent.offsetLeft;
  const y = event.pageY - btnComponent.offsetTop;

  btnComponent.style.setProperty("--xPos", x + "px");
  btnComponent.style.setProperty("--yPos", y + "px");
});