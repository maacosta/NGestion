import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const proveedores = ['Cotimania', 'Moni (verduleria)'];
const materiales = ['Huevos', 'Crema de leche (La Paulina)', 'Crema de leche (Sancor)', 'Crema de leche (La Serenisima)'];

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
  providers: [NgbTypeaheadConfig]
})
export class CompraComponent implements OnInit {
  public modelProveedor: any;
  public modelMaterial: any;
  constructor(config: NgbTypeaheadConfig) {
  }

  ngOnInit() {
  }

  busquedaProveedores = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : proveedores.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  busquedaMateriales = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : materiales.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

}
