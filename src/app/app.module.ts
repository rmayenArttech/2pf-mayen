import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecerasTitulo20Directive } from './directiva/cabeceras-titulo-20.directive';
import { NombreCompletoPipe } from './pipe/nombre-completo.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './componente/nav-bar/nav-bar.component';
import { CursoModule } from './curso/curso.module';
import { CursoRoutingModule } from './curso/curso-routing.module';
import { MaterialModule } from './material.module';
import { AlumnoRoutingModule } from './alumno/alumno-routing.module';
import { AlumnoModule } from './alumno/alumno.module';
import { UtilsModule } from './utils.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    NavBarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,    
    MaterialModule,
    UtilsModule,
    CursoModule,
    AlumnoModule,
    AlumnoRoutingModule,
    CursoRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
