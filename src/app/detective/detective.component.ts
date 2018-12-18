import { Component, OnInit } from '@angular/core';
import { Detective } from '../Clases/Detective';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DetectiveService } from '../Services/detective.service';

@Component({
  selector: 'app-detective',
  templateUrl: './detective.component.html',
  styleUrls: ['./detective.component.styl']
})
export class DetectiveComponent implements OnInit {

  detectives: Detective[] = [];
  forma: FormGroup;
  cargando: boolean = true;
  display = 'none';


  constructor(public _detectiveService: DetectiveService){

  }

  ngOnInit(){

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    });
    this.crearDetective();

  }

  crearDetective() {
    // tslint:disable-next-line:prefer-const
    let detective = new Detective(
      this.forma.value.dni,
      this.forma.value.nombre,
      this.forma.value.apellidos,
      this.forma.value.direccion,
      this.forma.value.codPostal,
      this.forma.value.telefono,
    );
    this._detectiveService.crearDetective(detective)
          .subscribe(resp => {
            console.log(resp);
            this.crearDetective();
                      });
  }

}
