//Variables
var searchButton = $(".searchButton");
var drinksListEl = $("#drink-list");
var drinksHistory = $("#saved-searches");



// for the nav bar
$(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });
  
  
  var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  var drinks = "" || searchHistory[0];
// Get Drinks
// Forloop for persisting the data on the DOM
function loadHistory(){
  for (var i = 0; i < searchHistory.length; i++) {
      var historyDivs = $('<div>');
      historyDivs.addClass("saved-items");
      historyDivs.addClass('list-group-item');
      historyDivs.innerHTML(searchHistory[i]);
      historyDivs.attr("data-index", searchHistory[i]);
      drinkHistory.append(historyDivs);
  }
}

//funtion to call drinks
  $("#vodka").on("click", function(){
    // var  = $(this).attr("");
    console.log("click")
    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
      method: "GET",
    }).then(function (response) {
      console.log(response)
    })
});



// take id from results and add data index in case its clicked.

//add onclick to local storage for each drink

//add shopping cart to save drink order

