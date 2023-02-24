import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCursoComponent } from './componente/formulario-curso/formulario-curso.component';
import { ListaCursoComponent } from './componente/lista-curso/lista-curso.component';

const routes: Routes = [
    {path: 'cursos', children: [
        {path: 'lista', component: ListaCursoComponent},
        {path: 'nuevo', component: FormularioCursoComponent},
        {path: 'editar/:id', component: FormularioCursoComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }