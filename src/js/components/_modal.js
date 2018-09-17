import { OPEN, ACTIVE, BODY } from './../constants';
import { SCROLL_WIDTH } from '../utils'

  ;(() => {

  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');
  controls.each((i, control) => {
    control = $(control);
    const modal = modals.filter(`[data-modal="${control.data('modal-control')}"]`);

    control.on('click', e => {
      e.preventDefault();
      modals.removeClass(OPEN);
      modal.addClass(OPEN);
      controls.removeClass(ACTIVE);
      control.addClass(ACTIVE);
      BODY.css({'overflow': 'hidden', 'padding-right': SCROLL_WIDTH() });
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const inner = modal.find('[data-modal-container]');
    const close = modal.find('[data-modal-close]');

    const hide = () => modal.removeClass(OPEN);

    BODY.on('click', e => {
      if ($(e.target).closest(inner).length || $(e.target).closest(close).length || $(e.target).closest(controls).length ) return;
      hide();
      controls.removeClass(ACTIVE);
      BODY.css({'overflow': 'visible', 'padding-right': 0 });
    });

    close.on('click', e => {
      e.preventDefault();
      hide();
    });
  });

})();
