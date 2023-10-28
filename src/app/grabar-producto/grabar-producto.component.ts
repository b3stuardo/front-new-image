import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { TipoProducto } from '../tipo-producto';
import { TipoProductoService } from '../tipo-producto.service';

@Component({
  selector: 'app-grabar-producto',
  templateUrl: './grabar-producto.component.html',
  styleUrls: ['./grabar-producto.component.css']
})
export class GrabarProductoComponent {
  producto: Producto = new Producto();
  tiposProducto: TipoProducto[]; 

  constructor(private productoServicio: ProductoService, private tipoProductoService: TipoProductoService,private router: Router){}

  ngOnInit(){
    this.tipoProductoService.obtenerListaDeTiposProductos().subscribe((response) => {
      this.tiposProducto = response;
    });
  }

  guardarProducto(){
    this.productoServicio.grabarNuevoProducto(this.producto).subscribe((dato) => {
      console.log(dato);
      window.alert('Producto grabado correctamente');
      this.irAListaDeProductos();
    }, error => {
      window.alert('Producto grabado correctamente');
      console.log(error);
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.guardarProducto();
  }
}
