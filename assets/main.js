//Variables
var searchButton = $(".searchButton");
var drinksListEl = $("#drink-list");
var drinksHistory = $("#saved-searches");
var drinkSection = $(".drink-section");
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

//find child to give me name position 4 or 3 text content
// i= "= drinktype"
//funtion to call drinks
  $(".drink").on("click", function(){
drinkSection.empty();
var drinkType = $(this).attr("data-index");

    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkType,

      method: "GET",
    }).then(function (response) {
      console.log(response)
      for (var i=0; i<response.drinks.length; i++) {
        response.drinks[i]
        var card = $('<div class="card"  style="width: 300px;">');
        var drinkheader = $('<div class="card-divider">').text(response.drinks[i].strDrink).appendTo(card)
        var drinkimage = $('<img src='+ response.drinks[i].strDrinkThumb +'>').appendTo(card)
card.appendTo(drinkSection)


      }
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




{/* <div class="card" style="width: 300px;">
  <div class="card-divider">
    This is a header
  </div>
  <img src="assets/img/generic/rectangle-1.jpg">
  <div class="card-section">
    <h4>This is a card.</h4>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
  </div>
</div> */}


// take id from results and add data index in case its clicked.

//add onclick to local storage for each drink

//add shopping cart to save drink order

