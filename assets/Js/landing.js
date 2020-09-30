// local storage
var nameInsert = document.getElementById("name");
var emailInsert = document.getElementById("email");


var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById('myModal')

// When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
}

// moves page to main page and set local storage

document.getElementById('myform').addEventListener('submit', async function(e) /*needed to add async before function */ {
  e.preventDefault()
  var key = nameInsert.value;
  var value = emailInsert.value;
  
  console.log(key);
  console.log(value);

  

  if (key && value) {

    var isEmailValid = await verifyEmail(value) // awaits to get the value inputted into email area to be verified before going on
    if (isEmailValid === "true") {
    localStorage.setItem(key, value);
    window.location.href = "main.html" 
    } 



  }
});

function verifyEmail(email) {

    // will show if the email that was inputted is false and will not proceed to main page.
  var isEmailValid = false

  // ---
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

      // provides an alert to the user that the email is valid (Checked by smtp_check)
      if (json.smtp_check) {
        window.location.href = "main.html" 
      }
      // provides an alert to the user that the email is invalid (Checked by smtp_check)
      else {

        modal.style.display = "block";

      }
    
      
      isEmailValid = json.smtp_check
      console.log(json.format_valid);
      console.log(json.smtp_check);
      console.log(json.score);
      console.log(json);
    },
  });
  // returns true or false value in order to proceed to main page
  return isEmailValid
}
