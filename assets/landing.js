// local storage
var nameInsert = document.getElementById("name");
var emailInsert = document.getElementById("email");

var access_key = "14742816210f0dbd6b2a2953b0230963";
var email_address = "support@apilayer.net";
// verify email address via AJAX call
$.ajax({
    method: 'GET',
    url: 'http://apilayer.net/api/check?access_key=' + '14742816210f0dbd6b2a2953b0230963' + '&email=' + email_address,
    success: function(json) {
    
    // Access and use your preferred validation result objects
    console.log(json.format_valid);
    console.log(json.smtp_check);
    console.log(json.score);
    }
});

// moves page to main page and set local storage
document.getElementById('myform').addEventListener('submit', function(e) {
  e.preventDefault()
  var key = nameInsert.value;
  var value = emailInsert.value;
  
  console.log(key);
  console.log(value);


  if (key && value) {
    localStorage.setItem(key, value);
    window.location.href = "./main.html"
  }
});
