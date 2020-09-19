//Variables
var searchButton = $(".searchButton");
var drinksListEl = $("#drink-list");
var drinksHistory = $("#saved-searches");
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var drinks = "" || searchHistory[0];


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
  
  // Forloop for persisting the drinks on the DOM
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
      //Append information to Page
      var currentCard = $("#vodka")
      .append("<div>")
      .addClass("card-body");
      // currentCard.();
      var currentName = currentCard.append("<p>");
      // .addClass("card-text");
      currentCard.append(currentName);
    })
});


// Search button click event
searchButton.click(function (event) {
  // event.preventDefault();
  var searchInput = $(".searchInput").val();
  if (searchInput !== "") {
      // var list = $("#saved-searches");
      var drinksName = $("<li>");
      var drinksName2 = $("<a>");
      drinksName2.attr("href","#");
      drinksName2.text(searchInput);
      drinksName.attr("data-index", searchInput);
      drinksName.addClass("saved-items");
      // cityName.text(searchInput);
      // // Local storage
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      drinksName.append(drinksName2);
      drinksHistory.append(drinksName);
  }
  getDrinks(searchInput);
});
$(document).on("click", ".saved-items", function(){
  var drinks = $(this).attr("data-index");
  console.log(city)
  getDrinks(city);
});
$(document).ready(function() {
  loadHistory();
});


// take id from results and add data index in case its clicked.

//add onclick to local storage for each drink

//add shopping cart to save drink order

