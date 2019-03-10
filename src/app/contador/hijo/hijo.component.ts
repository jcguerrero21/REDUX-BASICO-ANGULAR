import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
// import { MultiplicarAction, DividirAction } from '../contador.actions';
import * as fromContador from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  
  contador: number;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(state => {
      this.contador = state;
    });
  }

  public multiplicar(){
    const action = new fromContador.MultiplicarAction(5);
    this.store.dispatch(action);
  }

  public dividir(){
    const action = new fromContador.DividirAction(5);
    this.store.dispatch(action);
  }

}
