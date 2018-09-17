import { BODY, OPEN } from '../constants';

const toggleClass = (container, Class) => {
  (container.hasClass(Class))
    ? container.removeClass(Class)
    : container.addClass(Class);
};

const header = $('.js-header');
const btnMenu = $('.js-btn-menu');
const openMenu = 'is-open-menu';

btnMenu.on('click', () => { toggleClass(header, openMenu); });
BODY.on('click', e => {
  if ($(e.target).closest(btnMenu).length) return;
  header.removeClass(openMenu);
});


const search = $('.js-search');
const searchBtn = $('.js-search-btn');
const input = $('.js-search input');
searchBtn.on('click', () => { 
  toggleClass(search, OPEN);
  input.focus();
});
BODY.on('click', e => {
  if ($(e.target).closest(searchBtn).length || $(e.target).closest(input).length) return;
  search.removeClass(OPEN);
});
