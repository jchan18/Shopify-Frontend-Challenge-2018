// GLOBAL VARIABLES
var btn = document.getElementById("submit-btn");
var email_error = document.getElementById("email-error");
var dd_error = document.getElementById("dd-error");
var form = document.getElementById("form");
var ty_msg = document.getElementById("thank-you-msg");
var dots;

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// validate email and dropdown value
function validate() {
  var email = document.getElementById("email").value;
  var select = document.getElementById("interest");
  var selvalue = select.value;

  if (selvalue == "") {
    dd_error.classList.remove("hide");
    
    btn.value = "Sign up now";
    btn.disabled=false;
  } else {
    var text = select.options[select.value].text;
    if (!validateEmail(email)) {
      email_error.classList.remove("hide");
      btn.value = "Sign up now";
      btn.disabled=false;
      
    } else {
      console.log("Email: " + email);
      console.log("Interested in: " + text);
      form.classList.add("hide");
      ty_msg.classList.remove("hide");
    }
  }

  clearInterval(dots);
}

// submitting button animation
function dotsanim() {
  if (btn.value == "Submitting...") {
    btn.value = "Submitting";
  } else {
    btn.value += ".";
  }
}

// change the submit event
function change(event) {
  event.preventDefault();
  email_error.classList.add("hide");
  dd_error.classList.add("hide");
  btn.value = "Submitting";
  btn.disabled="disabled";
  dots = window.setInterval(dotsanim, 300);
  setTimeout(validate, 2000);
}