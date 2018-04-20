document.addEventListener('DOMContentLoaded', function() {
  console.log('Hello from color_clock.js');

  var clock = document.getElementById('clock');
  var color = document.getElementById('color');

  var time, h, m, s, clockString, colorString;

  function color_clock() {

    time = new Date();
    h = (time.getHours() % 12).toString();
    m = time.getMinutes().toString();
    s = time.getSeconds().toString();

    if (h.length < 2) {
      h = '0' + h;
    }
    if (m.length < 2) {
      m = '0' + m;
    }
    if (s.length < 2) {
      s = '0' + s;
    }

    clockString = h + ':' + m + ':' + s;
    colorString = '#' + h + m + s;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.background = colorString;
  }

  color_clock();
  setInterval(color_clock, 1000);

});