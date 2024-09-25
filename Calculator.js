//Calculator

let opPlus = false;
let opMinus = false;
let opMult = false;
let opDiv = false;

document.getElementById("div").addEventListener("click", (e) => {
  opDiv = true;
});
document.getElementById("mult").addEventListener("click", (e) => {
  opMult = true;
});
document.getElementById("plus").addEventListener("click", (e) => {
  opPlus = true;
});
document.getElementById("minus").addEventListener("click", (e) => {
  opMinus = true;
});

const alert = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
    "</div>",
  ].join("");
  alert.append(wrapper);
};

function one() {
  document.getElementById("IP").value += "1";
}

function two() {
  document.getElementById("IP").value += "2";
}

function three() {
  document.getElementById("IP").value += "3";
}

function four() {
  document.getElementById("IP").value += "4";
}

function five() {
  document.getElementById("IP").value += "5";
}

function six() {
  document.getElementById("IP").value += "6";
}

function seven() {
  document.getElementById("IP").value += "7";
}

function eight() {
  document.getElementById("IP").value += "8";
}

function nine() {
  document.getElementById("IP").value += "9";
}

function zero() {
  document.getElementById("IP").value += "0";
}

function pt() {
  document.getElementById("IP").value += ".";
}

function plus() {
  if (opPlus) appendAlert("Cannot use operator!", "warning");
  else {
    document.getElementById("IP").value += "+";
    opMinus = true;
    opMult = true;
    opDiv = true;
  }
}

function minus() {
  if (opMinus) appendAlert("Cannot use operator!", "warning");
  else {
    document.getElementById("IP").value += "-";
    opPlus = true;
    opMult = true;
    opDiv = true;
  }
}

function mult() {
  if (opMult) appendAlert("Cannot use operator!", "warning");
  else {
    document.getElementById("IP").value += "*";
    opPlus = true;
    opMinus = true;
    opDiv = true;
  }
}

function div() {
  if (opDiv) appendAlert("Cannot use operator!", "warning");
  else {
    document.getElementById("IP").value += "/";
    opPlus = true;
    opMult = true;
    opMinus = true;
  }
}

function eq() {
  let exp = document.getElementById("IP").value;
  if (exp.includes("+")) {
    exp = exp.split("+");
    if (exp[1])
      document.getElementById("IP").value = Number(exp[0]) + Number(exp[1]);
    else appendAlert("Invalid!", "warning");
  } else if (exp.includes("-")) {
    exp = exp.split("-");
    if (exp[1])
      document.getElementById("IP").value = Number(exp[0]) - Number(exp[1]);
    else appendAlert("Invalid!", "warning");
  } else if (exp.includes("*")) {
    exp = exp.split("*");
    if (exp[1])
      document.getElementById("IP").value = Number(exp[0]) * Number(exp[1]);
    else appendAlert("Invalid!", "warning");
  } else if (exp.includes("/")) {
    exp = exp.split("/");
    if (!exp[1]) appendAlert("Invalid!", "warning");
    else {
      if (Number(exp[1]) == 0)
        document.getElementById("No").lastElementChild.innerHTML =
          "Divison by zero Invalid!";
      else
        document.getElementById("IP").value = Number(exp[0]) / Number(exp[1]);
    }
  } else appendAlert("Invalid!", "warning");
  opPlus = false;
  opMult = false;
  opMinus = false;
  opDiv = false;
}

function back() {
  let exp = document.getElementById("IP").value;
  if (
    exp.includes("+") ||
    exp.includes("-") ||
    exp.includes("*") ||
    exp.includes("/")
  ) {
    document.getElementById("IP").value = String(exp).slice(0, exp.length - 1);
    opPlus = false;
    opMult = false;
    opMinus = false;
    opDiv = false;
  } else
    document.getElementById("IP").value = String(exp).slice(0, exp.length - 1);
}

function clr() {
  document.getElementById("IP").value = "";
  document.getElementById("liveAlertPlaceholder").innerHTML = "";
  opPlus = false;
  opMult = false;
  opMinus = false;
  opDiv = false;
}
