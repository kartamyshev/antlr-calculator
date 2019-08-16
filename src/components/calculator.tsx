import * as React from 'react';
import { observer } from 'mobx-react';
import { DataStore } from '@stores/data.store';
import { defaultValue } from '@utils/default-value';

import './calculator.less';

interface ICalculatorProps {
  dataStore: DataStore;
}

export const Calculator = observer(({ dataStore }: ICalculatorProps) => {
  return (
    <div className="calculator">
      <textarea
        className="calculator__user-input-area"
        defaultValue={defaultValue}
        onChange={(e: React.SyntheticEvent<HTMLTextAreaElement>) =>
          dataStore.changeValue(e.currentTarget.value)
        }
      />
      <div className="calculator__result">
        {dataStore.result$}
      </div>
    </div>
  );
});
