// import { Action } from '@ngrx/store';
// import { SUMAR, RESTAR, MULTIPLICAR, actions, DIVIDIR, RESET } from './contador.actions';
import * as fromContador from './contador.actions';

export let contadorReducer = (state: number = 10, action: fromContador.actions) => {

    switch (action.type) {

        case fromContador.SUMAR:
            return state += 1;

        case fromContador.RESTAR:
            return state -= 1;

        case fromContador.MULTIPLICAR:
            return state * action.payload;

        case fromContador.DIVIDIR:
            return state / action.payload;

        case fromContador.RESET:
            return state = 0;

        default:
            return state;

    }

}