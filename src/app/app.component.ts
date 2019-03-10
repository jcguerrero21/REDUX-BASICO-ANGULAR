import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
// import { SumarAction, RestarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';
import * as fromContador from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(state => {
      this.contador = state;
    });
  }

  public sumar() {
    const action: Action = new fromContador.SumarAction();
    this.store.dispatch(action);
  }

  public restar() {
    const action: Action = new fromContador.RestarAction();
    this.store.dispatch(action);
  }
}
