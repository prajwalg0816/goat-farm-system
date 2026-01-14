document.getElementById("loginBtn").addEventListener("click", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user.email;
      if (user === "admin@gmail.com") {
        window.location.href = "owner.html";
      } else {
        window.location.href = "worker.html";
      }
    })
    .catch((error) => {
      document.getElementById("msg").innerText = error.message;
    });
});
