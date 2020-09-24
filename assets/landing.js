// local storage
var nameInsert = document.getElementById("name");
var emailInsert = document.getElementById("email");



document.getElementById('myform').addEventListener('submit', function(e) {
  e.preventDefault()
  var key = nameInsert.value;
  var value = emailInsert.value;
  
  console.log(key);
  console.log(value);

  

  if (key && value) {
    localStorage.setItem(key, value);
    window.location.href = "main.html"
  }
  verifyEmail(value);
});
// set endpoint and your access key

// verify email address via AJAX call
function verifyEmail(email) {

    var emailV = $(".email-V");
    var access_key = "14742816210f0dbd6b2a2953b0230963";
    var email_address = "support@apilayer.net";
    
    $.ajax({
      url:
        "http://apilayer.net/api/check?access_key=" +
        access_key +
        "&email=" +
        email,
      dataType: "json",
      success: function (json) {
        // Access and use your preferred validation result objects
        console.log(json.format_valid);
        console.log(json.smtp_check);
        console.log(json.score);
      },
    });
}

