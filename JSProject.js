calculate = function () {
  const amount = document.getElementById("enteramount").value;
  const people = document.getElementById("numberofpeople").value;
  const result = amount / people;
  document.getElementById("finalamount").innerHTML = result;
};
