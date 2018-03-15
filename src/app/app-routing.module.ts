import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizarraComponent } from './pizarra/pizarra.component';
import { CompraComponent } from './compra/compra.component';
import { VentaComponent } from './venta/venta.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizarra', pathMatch: 'full' },
  { path: 'pizarra', component: PizarraComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
