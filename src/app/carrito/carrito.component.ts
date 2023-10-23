import { Component } from '@angular/core';
import { Producto } from '../producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productosDelCarrito: Producto[] = [];

  constructor (private router: Router){}

  ngOnInit(): void{
    let carritoStorage = localStorage.getItem('carrito') as string;
    this.productosDelCarrito = JSON.parse(carritoStorage);
  }

  pagar(){
    console.log('Agregar al carrito...', this.productosDelCarrito);
    localStorage.setItem('carrito', JSON.stringify(this.productosDelCarrito));
    this.irAListaDeProductos();
  }

  irAListaDeProductos(){
    this.router.navigate(['/grabar-pago']);
  }

}
