document.getElementById("loginBtn").addEventListener("click", function () {

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var msg = document.getElementById("msg");

  msg.innerText = "";

  if (!email || !password) {
    msg.innerText = "Please enter email and password";
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {
      // ONLY OWNER LOGIN
      window.location.href = "owner.html";
    })
    .catch(function (error) {
      msg.innerText = error.message;
    });
});
