function isThisMoney(amount) {
  const pennies = amount * 100;
  const roundUp = Number.isInteger(pennies);
  console.log(roundUp);
  return roundUp;
}

calculate = function () {
  const amount = document.getElementById("enteramount").value;
  if (amount < 0) {
    document.getElementById("finalamount").innerHTML =
      "Looks like you entered a minus number and didn't spent any money today - yay savings!";
  } else if (isThisMoney(amount) !== true) {
    document.getElementById("finalamount").innerHTML =
      "Please enter a valid monetary amount";
  } else {
    const tipping = document.getElementById("tipform").value;
    if (isThisMoney(tipping) !== true) {
      document.getElementById("finalamount").innerHTML =
        "Please enter a valid monetary amount";
    } else {
      const people = document.getElementById("numberofpeople").value;
      if (people < 1) {
        document.getElementById("finalamount").innerHTML =
          "At least 1 person must be paying, dickhead!";
      } else {
        const totalamount = parseInt(amount) + parseInt(tipping);
        const result = parseInt(totalamount) / parseInt(people);
        const display = "£" + result.toFixed(2) + " p.p.";
        document.getElementById("finalamount").innerHTML = display;
      }
    }
  }
};
