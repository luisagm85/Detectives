import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetectiveComponent } from './detective/detective.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import {NivelComponent} from './nivel/nivel.component';

const appRoutes: Routes = [
  {path: 'detective', component: DetectiveComponent},
  {path: 'nivel', component: NivelComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: '', redirectTo: 'detective', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DetectiveComponent,
    SolicitudComponent,
    NivelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
