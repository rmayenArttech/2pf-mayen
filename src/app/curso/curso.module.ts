import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursoComponent } from './componente/lista-curso/lista-curso.component';
import { FormularioCursoComponent } from './componente/formulario-curso/formulario-curso.component';
import { MaterialModule } from '../material.module';
import { NombreCompletoPipe } from '../pipe/nombre-completo.pipe';
import { CabecerasTitulo20Directive } from '../directiva/cabeceras-titulo-20.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicioAlumnoService } from '../alumno/servicio/servicio-alumno.service';



@NgModule({
  declarations: [
    ListaCursoComponent,
    FormularioCursoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ServicioAlumnoService
  ]
})
export class CursoModule { }
