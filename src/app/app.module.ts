import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { GrabarProductoComponent } from './grabar-producto/grabar-producto.component';
import { GrabarOfertaComponent } from './grabar-oferta/grabar-oferta.component';
import { ListaOfertaComponent } from './lista-oferta/lista-oferta.component';
import { GrabarHorarioComponent } from './grabar-horario/grabar-horario.component';
import { ListaHorarioComponent } from './lista-horario/lista-horario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    DetalleProductoComponent,
    GrabarProductoComponent,
    GrabarOfertaComponent,
    ListaOfertaComponent,
    GrabarHorarioComponent,
    ListaHorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
