var noUiSlider = require('nouislider');
var wNumb = require('wnumb');

function initRange(slider) {
  // var minSlider = parseInt(slider.dataset['rangeMin']);
  // var maxSlider = parseInt(slider.dataset['rangeMax']);
  // var startSlider = parseInt(slider.dataset['rangeStart']);
  // var endSlider = parseInt(slider.dataset['rangeEnd']);

  var minSlider = parseInt($(slider).data('range-min'));
  var maxSlider = parseInt($(slider).data('range-max'));

  noUiSlider.create(slider, {
    start: maxSlider / 2,

    range: {
      min: minSlider,
      max: maxSlider
    }
  });
}

var sliders = $('.js-range-slider');

if ($(sliders).length) {
  $(sliders).each((i, slider) => initRange(slider));

  $(sliders).each((i, slider) => {
    // var parent = slider.closest('.js-range-container');
    var parent = $(slider).parents('.js-range-container');
    var input = parent.find('.js-input');


    slider.noUiSlider.on('update.one', function(e) {
      input.val(e[0]);
    });

    // min.on('change', function() {
    //   slider.noUiSlider.set([this.value, null]);
    // });
    // max.on('change', function() {
    //   slider.noUiSlider.set([null, this.value]);
    // });
  });
}

function calcBMI() {
  var e = $('#bmi-body-size-input').val(),
    t = $('#bmi-weight-size-input').val(),
    n = t / (e / 100 * (e / 100));
  return n = n.toFixed(1), setTextBMI(n), n;
}

var resSlider = document.querySelector('.js-result-slider');
var minSlider = parseInt($(resSlider).data('range-min'));
var maxSlider = parseInt($(resSlider).data('range-max'));


noUiSlider.create(resSlider, {
  start: maxSlider / 2,

  range: {
    min: minSlider,
    max: maxSlider
  }, 
  tooltips: [wNumb({decimals: 1})],
});
