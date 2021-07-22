import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url='/api';
  constructor(private http: HttpClient) { }


  //get personas
  getPersonas()
  {
    return this.http.get(this.url);
  }


  //get una persona
  getUnaPersona(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar persona
  addPersona(equipo:Equipo)
  {
    return this.http.post(this.url, equipo);
  }


  //eliminar persona
  deletePersona(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar persona
  editPersona(id:string, equipo:Equipo){
    return this.http.put(this.url+'/'+id, equipo);
  }

}


export interface Equipo{
  id?:string;
  nombre?:string;
  apellido?:string;
   cedula ?:string,
    fecha_nac? :string,
    telefono ?:string,
    sexo? :string,
    profesion ?:string,
    municipio ?:string,
    direccion ?:string,
    vehiculo ?:string,
    marca? :string,
    ano?:string
}
