function joinUs() {
  let name = prompt("What is your name?");
  let email = prompt("What is your e-mail address?");
  let interest = prompt(
    "How many hours a week do you spend watching TV series?"
  );
  if (interest >= 4) {
    alert("Thank you, " + name + "!" + " expect to hear back from us soon!🥳");
  } else {
    alert(
      "😢 Sorry, " + name + " you can't join us now but we will be in touch!"
    );
  }
}
let joinUsButton = document.querySelector("button");
joinUsButton.addEventListener("click", joinUs);
