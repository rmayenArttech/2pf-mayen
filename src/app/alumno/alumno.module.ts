import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAlumnoComponent } from './componente/formulario-alumno/formulario-alumno.component';
import { ListaAlumnoComponent } from './componente/lista-alumno/lista-alumno.component';
import { MaterialModule } from '../material.module';
import { ServicioAlumnoService } from './servicio/servicio-alumno.service';
import { UtilsModule } from '../utils.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [  
    FormularioAlumnoComponent, 
    ListaAlumnoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    ServicioAlumnoService
  ]
})
export class AlumnoModule { }
