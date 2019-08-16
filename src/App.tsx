import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Calculator } from '@components/calculator';
import '@css/base.less';

ReactDOM.render(
  <Calculator />,
  document.getElementById('application-container')
);
