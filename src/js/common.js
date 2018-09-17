import components from './components';
import { DOC, BODY, NO_TOUCH, LOADED } from './constants';
import { isTouch } from './utils';
import svg4everybody from 'svg4everybody';

svg4everybody();

DOC.ready(components);

if (!isTouch()) BODY.addClass(NO_TOUCH);
