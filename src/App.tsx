import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DataStore } from '@stores/data.store';
import { Calculator } from '@components/calculator';
import '@css/base.less';

ReactDOM.render(
  <Calculator dataStore={new DataStore()} />,
  document.getElementById('application-container')
);
