import { Component, OnInit } from '@angular/core';
import {Equipo, EquipoService} from '../../SERVICES/equipo.service';
import {Router, ActivatedRoute} from '@angular/router'; 


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo: Equipo={
    id:'',
    nombre:'',
    apellido:'',
    cedula :'',
    fecha_nac:'',
    telefono :'',
    sexo :'',
    profesion :'',
    municipio :'',
    direccion :'',
    vehiculo :'',
    marca :'',
    ano :''
  };

  constructor(private EquipoService:EquipoService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
           //recuperar el id que nos llega y lo convertimos a string
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.EquipoService.getUnaPersona(id_entrada).subscribe(
        res=>{
          this.equipo = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }

  modificar()
  {
console.log("esta es la fecha "+this.equipo.fecha_nac);
var a=(<HTMLInputElement>document.getElementById("fechi")).value;
console.log("aqui esta lo traido "+a);
var divide = this.equipo.fecha_nac.split(/T/);
//this.equipo.fecha_nac="1978/07/06";
//this.equipo.fecha_nac=divide[0]; 
this.equipo.fecha_nac=a;
console.log("esta es la fecha nueva "+this.equipo.fecha_nac);
    this.EquipoService.editPersona(this.equipo.id, this.equipo).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicio']);
  }

}
