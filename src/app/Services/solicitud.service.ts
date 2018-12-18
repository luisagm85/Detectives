import { Injectable } from '@angular/core';
import { Solicitud } from '../Clases/Solicitud';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})

export class SolicitudService {

    constructor( public http: HttpClient) {
        console.log('servicio para solicitud listo');
     }

     crearSolicitud( solicitud: Solicitud) {

        let url = URL_SERVICIOS + '/solicitud';
        return this.http.post(url, solicitud)
              .pipe(map((res: any) => {
                 swal('Solicitud registrada');
                 return res.solicitud;
                 }));
     }
}