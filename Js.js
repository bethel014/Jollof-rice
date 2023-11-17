function feedback() {
  let name = prompt("what are your names?");
  let ratings = prompt("Are you satisfied with our services ?");
  if (ratings === "yes") {
    alert(
      "Thank you " + " " + name + "!" + " we are glad to have you here" + "💝"
    );
  } else {
    alert(
      "Thank you " + " " + name + "!" + " we promise to do better next" + "💝"
    );
  }
}

let button = document.querySelector("button");
button.addEventListener("click", feedback);
