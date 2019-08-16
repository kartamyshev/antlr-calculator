import * as React from 'react';
import { defaultValue } from '@utils/default-value';

import './calculator.less';
import { processInput } from '@utils/process-input';

export const Calculator = () => {

  const [ value, changeValue ] = React.useState(defaultValue);
  const textAreaRef = React.useRef(null);

  React.useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  return (
    <div className="calculator">
      <textarea
        ref={textAreaRef}
        className="calculator__user-input-area"
        defaultValue={defaultValue}
        onChange={(e: React.SyntheticEvent<HTMLTextAreaElement>) => changeValue(e.currentTarget.value)}
      />

      <div className="calculator__visual">
        <input type="text" className="calculator-screen" value={processInput(value) || 0} disabled />
        <div className="calculator-keys">
          <button type="button" className="operator" value="+">+</button>
          <button type="button" className="operator" value="-">-</button>
          <button type="button" className="operator" value="*">&times;</button>
          <button type="button" className="operator" value="/">&divide;</button>

          <button type="button" value="7">7</button>
          <button type="button" value="8">8</button>
          <button type="button" value="9">9</button>

          <button type="button" value="4">4</button>
          <button type="button" value="5">5</button>
          <button type="button" value="6">6</button>

          <button type="button" value="1">1</button>
          <button type="button" value="2">2</button>
          <button type="button" value="3">3</button>

          <button type="button" value="0">0</button>
          <button type="button" className="decimal" value=".">.</button>
          <button type="button" className="all-clear" value="all-clear">AC</button>

          <button type="button" className="equal-sign" value="=">=</button>
        </div>
      </div>
    </div>
  );
};
