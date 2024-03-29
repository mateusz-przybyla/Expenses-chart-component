var week = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];

function start() {
  var content = "";

  for (var i = 0; i < 7; i++) {
    var element = "day" + i;

    content +=
      '<div class="barBox"><div class="bar" id="' +
      element +
      '"></div><p>' +
      week[i] +
      "</p></div>";
  }

  document.querySelector(".chartBox").innerHTML = content;
}

start();
