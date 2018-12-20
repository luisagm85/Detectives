import { Component, OnInit } from '@angular/core';
import { Nivel } from './Nivel';

export class Detective {

  
  constructor(public dni: string, public nombre: string, public apellidos: string, 
    public direccion: string, public codPostal: number, public telefono: string, public nivel: Nivel
    ) {

}

}