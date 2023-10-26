import { Component } from '@angular/core';
import { Oferta } from '../oferta';
import { OfertaService } from '../oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-oferta',
  templateUrl: './lista-oferta.component.html',
  styleUrls: ['./lista-oferta.component.css']
})
export class ListaOfertaComponent {
  ofertas: Oferta[];

  constructor(private horarioServicio: OfertaService, private router: Router){}

  ngOnInit(){
    this.horarioServicio.obtenerListaDeOfertas().subscribe((dato) => {
      this.ofertas = dato;
    });
  }
}
