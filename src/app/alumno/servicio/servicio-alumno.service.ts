import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Estudiante } from 'src/app/modelo/estudiante';

@Injectable()
export class ServicioAlumnoService {
  private estudiantes: Estudiante[] = [
    {
       "nombre":"José",
       "apellido1":"González",
       "apellido2":"Sánchez",
       "matricula":"62703946",
       "email":"josé.gonzález@email.com",
       "numeroTelefono":"555-237-693",
       "fechaNacimiento":"5/6/1953",
       "edad":44,
       "urlImagen":"https://picsum.photos/id/185/200/300"
    },
    {
       "nombre":"María",
       "apellido1":"Fernández",
       "apellido2":"López",
       "matricula":"92610117",
       "email":"maría.fernández@email.com",
       "numeroTelefono":"555-629-983",
       "fechaNacimiento":"2/27/1945",
       "edad":50,
       "urlImagen":"https://picsum.photos/id/247/200/300"
    },
    {
       "nombre":"Ana",
       "apellido1":"Díaz",
       "apellido2":"Ruiz",
       "matricula":"6373171",
       "email":"ana.díaz@email.com",
       "numeroTelefono":"555-785-281",
       "fechaNacimiento":"2/24/1923",
       "edad":25,
       "urlImagen":"https://picsum.photos/id/691/200/300"
    },
    {
       "nombre":"José",
       "apellido1":"López",
       "apellido2":"Díaz",
       "matricula":"30271101",
       "email":"josé.lópez@email.com",
       "numeroTelefono":"555-246-771",
       "fechaNacimiento":"1/5/1927",
       "edad":20,
       "urlImagen":"https://picsum.photos/id/295/200/300"
    },
    {
       "nombre":"Pedro",
       "apellido1":"Ruiz",
       "apellido2":"González",
       "matricula":"94528572",
       "email":"pedro.ruiz@email.com",
       "numeroTelefono":"555-682-211",
       "fechaNacimiento":"8/13/191",
       "edad":39,
       "urlImagen":"https://picsum.photos/id/373/200/300"
    },
    {
       "nombre":"Sofía",
       "apellido1":"Fernández",
       "apellido2":"García",
       "matricula":"214849",
       "email":"sofía.fernández@email.com",
       "numeroTelefono":"555-803-596",
       "fechaNacimiento":"12/26/1956",
       "edad":34,
       "urlImagen":"https://picsum.photos/id/805/200/300"
    },
    {
       "nombre":"Juan",
       "apellido1":"Ruiz",
       "apellido2":"García",
       "matricula":"80283999",
       "email":"juan.ruiz@email.com",
       "numeroTelefono":"555-0-204",
       "fechaNacimiento":"2/20/1984",
       "edad":29,
       "urlImagen":"https://picsum.photos/id/434/200/300"
    },
    {
       "nombre":"José",
       "apellido1":"López",
       "apellido2":"López",
       "matricula":"66348013",
       "email":"josé.lópez@email.com",
       "numeroTelefono":"555-242-403",
       "fechaNacimiento":"12/24/1928",
       "edad":50,
       "urlImagen":"https://picsum.photos/id/865/200/300"
    },
    {
       "nombre":"José",
       "apellido1":"Ruiz",
       "apellido2":"Rodríguez",
       "matricula":"741575",
       "email":"josé.ruiz@email.com",
       "numeroTelefono":"555-979-147",
       "fechaNacimiento":"9/4/1989",
       "edad":52,
       "urlImagen":"https://picsum.photos/id/369/200/300"
    },
    {
       "nombre":"Luis",
       "apellido1":"Pérez",
       "apellido2":"Rodríguez",
       "matricula":"79436261",
       "email":"luis.pérez@email.com",
       "numeroTelefono":"555-831-305",
       "fechaNacimiento":"1/28/1975",
       "edad":21,
       "urlImagen":"https://picsum.photos/id/769/200/300"
    }
 ];

 private estudiantes$: BehaviorSubject<Estudiante[]>

  constructor() { 
    this.estudiantes$ = new BehaviorSubject<Estudiante[]>(this.estudiantes)
  }

  obtenerEstudiantes(): Observable<Estudiante[]>{
    return this.estudiantes$.asObservable();
  }

  obtenerEstudiantePorId(id: string): Observable<Estudiante> {
    console.log("id: ", id)
    return this.estudiantes$.pipe(
      map(estudiantes => estudiantes.filter(estudiante => estudiante.matricula === id)[0]),
      filter(estudiante => !!estudiante),
    );
  }

  agregarEstudiante(estudiante: Estudiante): void{
    this.estudiantes.push(estudiante)
    this.estudiantes$.next(this.estudiantes)
  }

  editarEstidiante(estudiante: Estudiante):void{
    const indice = this.estudiantes.findIndex((e: Estudiante) => e.matricula === estudiante.matricula);

    if(indice > -1){
      this.estudiantes[indice] = estudiante
      this.estudiantes$.next(this.estudiantes)
    }

  }

  eliminarEstudiante(estudiante: Estudiante):void{
    const indice = this.estudiantes.findIndex((e: Estudiante) => e.matricula === estudiante.matricula);

    if(indice > -1){
      this.estudiantes.splice(indice, 1)
      this.estudiantes$.next(this.estudiantes)
    }
  }

}
