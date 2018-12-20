import { Injectable } from '@angular/core';
import { Nivel } from '../Clases/Nivel';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})

export class NivelService {

    constructor( public http: HttpClient) {
        console.log('servicio para nivel listo');
     }

}