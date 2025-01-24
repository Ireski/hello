function validational() {
  if (document.formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username";
    return false;
  } else if (document.formfill.Username.value.length < 6) {
    document.getElementById("result").innerHTML = "Atleast Six Letter";
    return false;
  } else if (document.formfill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter your Email";
    return false;
  } else if (document.formfill.Password.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Password";
    return false;
    ``;
  } else if (document.formfill.Password.value.length < 6) {
    document.getElementById("result").innerHTML =
      "Password must be greater than  6-digits";
    return false;
    ``;
  } else if (document.formfill.cPassword.value == "") {
    document.getElementById("result").innerHTML = "Enter Confirm Password";
    return false;
    ``;
  } else if (
    document.formfill.cPassword.value !== document.formfill.Password.value
  ) {
    document.getElementById("result").innerHTML = "Password doesn't Match";
    return false;
    ``;
  } else if (
    document.formfill.Password.value == document.formfill.cPassword.value
  ) {
    popup.classList.add("open-slide");
    return false;
    ``;
  }
}

var popup = document.getElementById("popup");
function ClosesSlide() {
  popup.classList.remove("open-slide");
}
