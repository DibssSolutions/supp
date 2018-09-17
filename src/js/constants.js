export const NO_TOUCH = 'no-touch';
export const OPEN = 'is-open';
export const ACTIVE = 'is-active';
export const SHOW = 'is-show';
export const ANIMATED = 'is-animated';
export const HIDDEN = 'is-hidden';
export const OWL = 'owl-carousel';

export const widthSM = 767;
export const widthXS = 599;

export const WIN = $(window);
export const DOC = $(document);
export const BODY = $('body');
export const HTMLBODY = $('html, body');

export const winWidth = size => window.matchMedia(`(max-width: ${size}px)`).matches;

export const TOUCH = () => { return 'ontouchstart' in window; };
