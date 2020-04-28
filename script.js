function idCard() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var postFullName = firstName + " " + lastName;
  document.getElementById("postFullName").innerHTML = postFullName;
  document.getElementById("postAddress").innerHTML = address;
  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("phoneNumber").value);

  var numberArray = [age, phoneNumber];
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] <= 100) {
      document.getElementById("postAge").innerHTML = "Age: " + age;
    } else if (numberArray[i] > 100) {
      document.getElementById("postPhoneNumber").innerHTML =
        "Phone Number: " + phoneNumber;
    }
  }
}

btn.addEventListener("click", idCard);
