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
  productosDelCarrito: Producto[] = [];

  constructor(private productoService: ProductoService){

  }

  ngOnInit(){
    this.productoService.obtenerListaDeProductos().subscribe((response) => {
      this.productos = response;
    });
  }

  agregarAlCarrito(producto: Producto){
    let productoClone = { ...producto };
    productoClone.cantidad = 1;
    this.productosDelCarrito.push(productoClone);
    console.log('Agregar al carrito...', this.productosDelCarrito);
    localStorage.setItem('carrito', JSON.stringify(this.productosDelCarrito));
  }
}
