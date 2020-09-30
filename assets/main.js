//Variables
var searchButton = $(".searchButton");
var drinksListEl = $("#drink-list");
var drinksHistory = $("#saved-searches");
var drinkSection = $(".drink-section");
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var drinks = "" || searchHistory[0];

// for the nav bar
$(function () {
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else {
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
});

// Forloop for persisting the drinks on the DOM
function loadHistory() {
  for (var i = 0; i < searchHistory.length; i++) {
    var historyDivs = $("<div>");
    historyDivs.addClass("saved-items");
    historyDivs.addClass("list-group-item");
    historyDivs.innerHTML(searchHistory[i]);
    historyDivs.attr("data-index", searchHistory[i]);
    drinkHistory.append(historyDivs);
  }
}

//find child to give me name position 4 or 3 text content
// i= "= drinktype"
//funtion to call drinks
$(".drink").on("click", function () {
  drinkSection.empty();
  var drinkType = $(this).attr("data-index");

  $.ajax({
    url:
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkType,

    method: "GET",
  }).then(function (response) {
    for (var i = 0; i < 14; i++) {
      response.drinks[i];
      var card = $('<div class="card" style="width: 300px;">');
      var drinkheader = $('<div class="card-divider">')
        .text(response.drinks[i].strDrink)
        .appendTo(card);
      var drinkimage = $(
        "<img src=" + response.drinks[i].strDrinkThumb + ">"
      ).appendTo(card);
      card.appendTo(drinkSection);
    }
    //Append information to Page
    var currentCard = $("#vodka").append("<div>").addClass("card-body");
    // currentCard.();
    var currentName = currentCard.append("<p>");
    // .addClass("card-text");
    currentCard.append(currentName);
  });
});


// Nav Modals
var modalBtn = document.querySelector('.modal-btn');
var modalBtn1 = document.querySelector('.modal-btn1');
var modalBtn2 = document.querySelector('.modal-btn2');
var modalBg = document.querySelector('.modal-bg');
var modalBg1 = document.querySelector('.modal-bg1');
var modalBg2 = document.querySelector('.modal-bg2');
var modalClose = document.querySelector('.modal-close');
var modalClose1 = document.querySelector('.modal-close1');
var modalClose2 = document.querySelector('.modal-close2');

modalBtn.addEventListener('click', function() {
  modalBg.classList.add('bg-active');
});

modalBtn1.addEventListener('click', function() {
  modalBg1.classList.add('bg-active');
});

modalBtn2.addEventListener('click', function() {
  modalBg2.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
  modalBg.classList.remove('bg-active');
});

modalClose1.addEventListener('click', function() {
  modalBg1.classList.remove('bg-active');
});

modalClose2.addEventListener('click', function() {
  modalBg2.classList.remove('bg-active');
});

