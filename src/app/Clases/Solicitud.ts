import { Component, OnInit } from '@angular/core';

export class Solicitud {

  constructor( public fechaSolicitud: Date, public descripcionEquipo: string,
    public resumenCV: string, public estado: string, public detective_dni: string,
    public _id?: string) {

}

}