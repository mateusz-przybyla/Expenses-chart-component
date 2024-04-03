async function fetchChartData(url) {
  const chartFetch = await fetch(url);
  const chartData = await chartFetch.json();

  createBars(chartData);
}

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

fetchChartData("./data.json");
