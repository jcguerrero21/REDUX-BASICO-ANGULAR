import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
// import { ResetAction } from '../contador.actions';
import * as fromContador from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  
  contador: number;

  constructor(private store: Store<AppState>) { 
    this.store.select('contador').subscribe(state => {
      this.contador = state;
    })
  }

  ngOnInit() {
  }

  public reset(){
    const action = new fromContador.ResetAction();
    this.store.dispatch(action);
  }

}
