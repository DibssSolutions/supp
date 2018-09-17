var noUiSlider = require('nouislider');
var wNumb = require('wnumb');

$(document).ready(function() {

  var resSlider = document.querySelector('.js-result-slider');

  if (resSlider) {
    noUiSlider.create(resSlider, {
      start: 25,
      range: {
        min: 7.6,
        max: 180
      },
      tooltips: [wNumb({ decimals: 1 })]
    });
  }

  var sliders = $('.js-range-slider');
  if ($(sliders).length) {
    $(sliders).each((i, slider) => initRange(slider));

    $(sliders).each((i, slider) => {
      var parent = $(slider).parents('.js-range-container');
      var input = parent.find('.js-input');

      slider.noUiSlider.on('update.one', function(e) {
        input.val(e[0]);
        var res = calcBMI();
        resSlider.noUiSlider.set(res);
      });

      input.on('change', function() {
        slider.noUiSlider.set(this.value);
        var res = calcBMI();

        resSlider.noUiSlider.set(res);
      });
    });
  }
});

function initRange(slider) {
  var minSlider = parseInt($(slider).data('range-min'));
  var maxSlider = parseInt($(slider).data('range-max'));

  noUiSlider.create(slider, {
    start: (maxSlider + minSlider) / 2,
    range: {
      min: minSlider,
      max: maxSlider
    }
  });
}

function calcBMI() {
  var e = $('.js-height-range').val(),
    t = $('.js-weight-range').val(),
    n = t / ((e / 100) * (e / 100));
  return (n = n.toFixed(1));
}


