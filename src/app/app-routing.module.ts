import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { GrabarProductoComponent } from './grabar-producto/grabar-producto.component';
import { GrabarClienteComponent } from './grabar-cliente/grabar-cliente.component';
import { GrabarCitaComponent } from './grabar-cita/grabar-cita.component';
import { GrabarRecordatorioComponent } from './grabar-recordatorio/grabar-recordatorio.component';
import { GrabarOfertaComponent } from './grabar-oferta/grabar-oferta.component';

const routes: Routes = [
  {path: '', redirectTo: '/productos', pathMatch: 'full'},
  {path: 'productos', component: ListaProductosComponent},
  {path: 'productos/:id', component: DetalleProductoComponent},
  {path: 'grabar-producto', component: GrabarProductoComponent},
  {path: 'grabar-cliente', component: GrabarClienteComponent},
  {path: 'grabar-cita', component: GrabarCitaComponent},
  {path: 'grabar-recordatorio-cita', component: GrabarRecordatorioComponent},
  {path: 'grabar-oferta', component: GrabarOfertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
