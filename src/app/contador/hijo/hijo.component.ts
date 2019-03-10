import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  
  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public multiplicar(){
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  public dividir(){
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  public resetNieto(event){
    this.contador = event;
    this.cambioContador.emit(this.contador);
  }

}