import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CompraComponent } from './compra/compra.component';
import { CompraDetalleComponent } from './compra-detalle/compra-detalle.component';
import { VentaDetalleComponent } from './venta-detalle/venta-detalle.component';
import { VentaComponent } from './venta/venta.component';
import { MaterialComponent } from './material/material.component';
import { ProductoComponent } from './producto/producto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PizarraComponent } from './pizarra/pizarra.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    CompraDetalleComponent,
    VentaDetalleComponent,
    VentaComponent,
    MaterialComponent,
    ProductoComponent,
    ContactoComponent,
    PizarraComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
