import { action, observable } from 'mobx';
import { processInput } from '@utils/process-input';

export class DataStore {
  @observable public result$: string[] = [];

  @action.bound
  public changeValue(value: string) {
    this.result$ = processInput(value);
  }
}
