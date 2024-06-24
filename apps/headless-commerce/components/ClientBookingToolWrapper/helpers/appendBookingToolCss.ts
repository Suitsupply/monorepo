import type { EnvironmentName } from '@susu/headless-commerce/utils/environment';
import { environmentName } from '@susu/headless-commerce/utils/environment';

const bookingToolCssLinks: Record<EnvironmentName, string> = {
  acc: 'https://acc.appointment.suitsupply.com/v2/build/crm-booking-tool.css',
  tst: 'https://tst.appointment.suitsupply.com/v2/build/crm-booking-tool.css',
  dev: 'https://tst.appointment.suitsupply.com/v2/build/crm-booking-tool.css',
  prd: 'https://appointment.suitsupply.com/v2/build/crm-booking-tool.css',
};

function generateBTCSSFileLink() {
  return bookingToolCssLinks[environmentName];
}

export function appendBTCss() {
  let libraryCssNode = document.createElement('link');

  libraryCssNode.rel = 'stylesheet';
  libraryCssNode.type = 'text/css';
  libraryCssNode.href = generateBTCSSFileLink();

  document.querySelector('body')?.append(libraryCssNode);

  return;
}
