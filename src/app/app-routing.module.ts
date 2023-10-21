import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { GrabarProductoComponent } from './grabar-producto/grabar-producto.component';
import { GrabarClienteComponent } from './grabar-cliente/grabar-cliente.component';
import { GrabarCitaComponent } from './grabar-cita/grabar-cita.component';
import { GrabarRecordatorioComponent } from './grabar-recordatorio/grabar-recordatorio.component';
import { GrabarOfertaComponent } from './grabar-oferta/grabar-oferta.component';
import { GrabarFacturaComponent } from './grabar-factura/grabar-factura.component';
import { ListaFacturasComponent } from './lista-facturas/lista-facturas.component';
import { GrabarPagoComponent } from './grabar-pago/grabar-pago.component';
import { GrabarServicioComponent } from './grabar-servicio/grabar-servicio.component';
import { GrabarEmpleadoComponent } from './grabar-empleado/grabar-empleado.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { GrabarUsuarioComponent } from './grabar-usuario/grabar-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/productos', pathMatch: 'full'},
  {path: 'productos', component: ListaProductosComponent},
  {path: 'productos/:id', component: DetalleProductoComponent},
  {path: 'grabar-producto', component: GrabarProductoComponent},
  {path: 'grabar-cliente', component: GrabarClienteComponent},
  {path: 'grabar-cita', component: GrabarCitaComponent},
  {path: 'grabar-recordatorio-cita', component: GrabarRecordatorioComponent},
  {path: 'grabar-oferta', component: GrabarOfertaComponent},
  {path: 'grabar-factura', component: GrabarFacturaComponent},
  {path: 'facturas', component: ListaFacturasComponent},
  {path: 'grabar-pago', component: GrabarPagoComponent},
  {path: 'grabar-servicio', component: GrabarServicioComponent},
  {path: 'grabar-empleado', component: GrabarEmpleadoComponent},
  {path: 'empleados', component: ListaEmpleadosComponent},
  {path: 'grabar-usuario', component: GrabarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
