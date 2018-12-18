import { Component, OnInit } from '@angular/core';

export class Detective {

  
  constructor(public dni: string, public nombre: string, public apellidos: string, 
    public direccion: string, public codPostal: number, public telefono: string
    ) {

}

}