import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../Clases/Solicitud';
import {Detective} from '../Clases/Detective';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SolicitudService } from '../Services/solicitud.service';
import {DetectiveService} from '../Services/detective.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.styl']
})
export class SolicitudComponent{

  solicitudes: Solicitud[] = [];
  detective: Detective[] = [];
  formdetective = new Solicitud('');
  forma: FormGroup;
  
  constructor(public _solicitudService: SolicitudService, public _detectiveService: DetectiveService) { }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    });
    this.crearsolicitud();
    this.cargarDetectives();
  }

  crearsolicitud() {
    // tslint:disable-next-line:prefer-const
    let solicitud = new Solicitud(
      this.forma.value.fechaSolicitud,
      this.forma.value.descripcioEquipo,
      this.forma.value.resumenCV,
      this.forma.value.estado,
      this.forma.value.detective_dni
    );
    this._solicitudService.crearSolicitud(solicitud)
          .subscribe(resp => {
            console.log(resp);
            this.crearsolicitud();
                      });
  }

  cargarDetectives(){
    this._detectiveService.cargarDetectives()
                .subscribe((resp: any) => {
                  this.detective = resp.detectives;
                  console.log(this.detective);
                });
  }

}
