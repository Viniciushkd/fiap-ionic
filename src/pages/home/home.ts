import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titulo: string;
  constructor(public navCtrl: NavController) {
    this.titulo = "Gestão de Contatos";
  }

  getTitulo(): string {
    return "App: " + this.titulo;
  }

}
