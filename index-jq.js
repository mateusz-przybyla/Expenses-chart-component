$(document).ready(function () {
  $.getJSON("data.json", function (chartData) {
    for (var i = 0; i < chartData.length; i++) {
      $(".chartBox").append(
        '<div class="barBox"><div class="bar" data-amount=' +
          "$" +
          chartData[i].amount +
          ' style="height: ' +
          Math.ceil(chartData[i].amount * 2.85) +
          'px;"></div><p class="day">' +
          chartData[i].day +
          "</p></div>"
      );
    }
    calculateCurrentMonthBalance(chartData);
    highlightCurrentDay();
  }).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
  });
});

function calculateCurrentMonthBalance(chartData) {
  var sum = 250.39;

  for (var i = 0; i < chartData.length; i++) {
    sum += chartData[i].amount;
  }

  sum = Math.round(sum * 100) / 100;

  $(".balance2").html("$" + sum);
}

function highlightCurrentDay() {
  const weekDayIndex = (new Date().getDay() - 1 + 7) % 7;

  var bars = document.getElementsByClassName("bar")[weekDayIndex];
  bars.classList.add("barCurrentDay");
}
