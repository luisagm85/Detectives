import { Injectable } from '@angular/core';
import { Detective } from '../Clases/Detective';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})

export class DetectiveService {

    constructor( public http: HttpClient) {
        console.log('servicio para detective listo');
     }

     crearDetective( detective: Detective) {

        let url = URL_SERVICIOS + '/detective';
        return this.http.post(url, detective)
              .pipe(map((res: any) => {
                 swal('Detective registrado', detective.nombre, 'success');
                 return res.nodriza;
                 }));
     }

     cargarDetectives(){
         let url = URL_SERVICIOS + '/detective';
            return this.http.get(url);
          }
}