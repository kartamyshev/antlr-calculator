import { action, observable } from 'mobx';
import { parseLine } from '@utils/parse-line';

export class DataStore {
  @observable public result$: string[] = [];

  @action.bound
  public changeValue(value: string) {
    this.result$ = parseLine(value);
  }
}
