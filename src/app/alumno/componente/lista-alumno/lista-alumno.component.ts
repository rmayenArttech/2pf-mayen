import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/modelo/estudiante';
import { ServicioAlumnoService } from '../../servicio/servicio-alumno.service';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})

  
export class ListaAlumnoComponent implements OnInit{


  title!: string;

  dataSource$!: Observable<Estudiante[]>;

  constructor(private servicioConsultaService: ServicioAlumnoService){}
  ngOnInit(): void {
    this.title = "Lista Alumnos"
    this.dataSource$ = this.servicioConsultaService.obtenerEstudiantes();
  }

  elimnarAlumno(estudiante: Estudiante){
    console.log("estudiante: ", estudiante)
    this.servicioConsultaService.eliminarEstudiante(estudiante);
  }
    
}
