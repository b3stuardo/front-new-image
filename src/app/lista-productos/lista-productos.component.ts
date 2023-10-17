import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent{

  productos: Producto[];

  constructor(private productoService: ProductoService){

  }

  ngOnInit(){
    this.productoService.obtenerListaDeProductos().subscribe((response) => {
      this.productos = response;
    });
  }

  agregarAlCarrito(codigo: string){
  console.log('Agregar al carrito...');
  }
}
