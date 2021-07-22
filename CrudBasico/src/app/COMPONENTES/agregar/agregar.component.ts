import { Component, OnInit } from '@angular/core';
import {Equipo, EquipoService} from '../../SERVICES/equipo.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  equipo: Equipo={
    id:'',
    nombre:'',
    apellido:'',
     cedula :'',
    fecha_nac :'',
    telefono :'',
    sexo :'',
    profesion :'',
    municipio :'',
    direccion :'',
    vehiculo :'',
    marca :'',
    ano :''
  };

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.equipo.id;
console.log("fecha ahi va "+this.equipo.fecha_nac);
var a=(<HTMLInputElement>document.getElementById("fechi")).value;
console.log("aqui esta lo traido "+a);
this.equipo.fecha_nac=a;
    this.EquipoService.addPersona(this.equipo).subscribe();
    this.router.navigate(['/inicio']);
    
  }

}
