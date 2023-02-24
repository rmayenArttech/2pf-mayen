import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAlumnoComponent } from './componente/formulario-alumno/formulario-alumno.component';
import { ListaAlumnoComponent } from './componente/lista-alumno/lista-alumno.component';

const routes: Routes = [
    {path: 'alumno', children: [
        {path: 'lista', component: ListaAlumnoComponent},
        {path: 'nuevo', component: FormularioAlumnoComponent},
        {path: 'editar/:id', component: FormularioAlumnoComponent} 
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }