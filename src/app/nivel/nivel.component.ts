import { Component, OnInit } from '@angular/core';
import {Nivel} from '../Clases/Nivel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NivelService } from '../Services/nivel.service';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.styl']
})
export class NivelComponent implements OnInit {

  niveles: Nivel[] = [];

  constructor(public _nivelService: NivelService) { }

  ngOnInit() {

  }

}
