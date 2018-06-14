//check email address
function checkEmail(str) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(mailFormat.test(str)) {
     console.log("Valid email address");
  }
  else {
     console.log("Invalid email address");
     }
  }
