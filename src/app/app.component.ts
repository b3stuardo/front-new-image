import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-image';


  constructor(private toast: NgToastService){}

  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Grabado correctamente',duration:5000});
  }
  
  showError() {
    this.toast.error({detail:"ERROR",summary:'Error al intentar grabar',sticky:true, duration: 5000});
  }

}
