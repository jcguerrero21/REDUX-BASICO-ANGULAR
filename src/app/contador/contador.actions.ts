import { Action } from '@ngrx/store';

export const SUMAR = '[Contador] Sumar';
export const RESTAR = '[Contador] Restar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset'

export class SumarAction implements Action {
    readonly type = SUMAR;
}

export class RestarAction implements Action {
    readonly type = RESTAR;
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;

    constructor(public payload: number) {}
}

export class DividirAction implements Action {
    readonly type = DIVIDIR;

    constructor(public payload: number) {}
}

export class ResetAction implements Action {
    readonly type = RESET;
}

export type actions = SumarAction | RestarAction | MultiplicarAction | DividirAction | ResetAction;