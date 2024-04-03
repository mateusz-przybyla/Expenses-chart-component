async function fetchChartData(url) {
  const chartFetch = await fetch(url);
  const chartData = await chartFetch.json();

  createBars(chartData);
  calculateCurrentMonthBalance(chartData);
}

fetchChartData("./data.json");

function createBars(chartData) {
  var content = "";

  for (var i = 0; i < chartData.length; i++) {
    content +=
      '<div class="barBox"><div class="bar" data-amount=' +
      "$" +
      chartData[i].amount +
      ' style="height: ' +
      Math.ceil(chartData[i].amount * 2.85) +
      'px;"></div><p class="day">' +
      chartData[i].day +
      "</p></div>";
  }

  document.querySelector(".chartBox").innerHTML = content;
  highlightCurrentDay();
}

function calculateCurrentMonthBalance(chartData) {
  var sum = 250.39;

  for (var i = 0; i < chartData.length; i++) {
    sum += chartData[i].amount;
  }

  sum = Math.round(sum * 100) / 100;

  document.querySelector(".balance2").innerHTML = "$" + sum;
}

function highlightCurrentDay() {
  const weekDayIndex = (new Date().getDay() - 1 + 7) % 7;

  var bars = document.getElementsByClassName("bar")[weekDayIndex];
  bars.classList.add("barCurrentDay");
}
