async function fetchChartData(url) {
  const chartFetch = await fetch(url);
  const chartData = await chartFetch.json();

  createBars(chartData);
  calculateCurrentMonthBalance(chartData);
  calculateTheHighestValue(chartData);
}

fetchChartData("./data.json");

function createBars(chartData) {
  var content = "";

  for (var i = 0; i < chartData.length; i++) {
    content +=
      '<div class="barBox"><div class="bar" style="height: ' +
      Math.ceil(chartData[i].amount * 2.85) +
      'px;"></div><p class="day">' +
      chartData[i].day +
      "</p></div>";
  }

  document.querySelector(".chartBox").innerHTML = content;
}

function calculateCurrentMonthBalance(chartData) {
  var sum = 250.39;

  for (var i = 0; i < chartData.length; i++) {
    sum += chartData[i].amount;
  }

  sum = Math.round(sum * 100) / 100;

  document.querySelector(".balance2").innerHTML = "$" + sum;
}

function calculateTheHighestValue(chartData) {
  var max = chartData[0].amount;
  var position = 0;

  for (var i = 0; i < chartData.length - 1; i++) {
    if (chartData[i + 1].amount > max) {
      max = chartData[i + 1].amount;
      position = i + 1;
    }
  }

  document.getElementsByClassName("bar")[position].classList.add("barMax");
}
