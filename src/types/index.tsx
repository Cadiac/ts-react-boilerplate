import { RouterState } from 'react-router-redux';

export interface FooState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface BarState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface RootState {
  router: RouterState;
  foo: FooState;
  bar: BarState;
}
