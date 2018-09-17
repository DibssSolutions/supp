import { BODY } from '../constants';

const header = $('.js-header');
const btnMenu = $('.js-btn-menu');
const openMenu = 'is-open-menu';

btnMenu.on('click', () => {
  (header.hasClass(openMenu))
    ? header.removeClass(openMenu)
    : header.addClass(openMenu);
});

BODY.on('click', e => {
  if ($(e.target).closest(btnMenu).length) return;
  header.removeClass(openMenu);
});
