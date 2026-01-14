document.getElementById("loginBtn").addEventListener("click", function () {

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var msg = document.getElementById("msg");

  msg.innerText = "";

  if (email === "" || password === "") {
    msg.innerText = "Please enter email and password";
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      var userEmail = userCredential.user.email;

      if (userEmail === "admin@gmail.com") {
        window.location.href = "owner.html";
      } else {
        window.location.href = "worker.html";
      }
    })
    .catch(function (error) {
      msg.innerText = error.message;
    });
});
