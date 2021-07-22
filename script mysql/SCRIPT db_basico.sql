create database if not exists db_basico;

use db_basico;


create table persona(
id int not null auto_increment primary key,
transporte int  not null,
nombre varchar(50),
apellido varchar(50),
cedula varchar(50),
fecha_nac date,
telefono varchar(50),
sexo varchar(50),
profesion varchar(50),
municipio varchar(50),
direccion varchar(50),
 FOREIGN KEY (transporte) REFERENCES transporte(id)
);

create table transporte(
id int not null auto_increment primary key,
vehiculo varchar(50),
marca varchar(50),
ano int
);

insert into transporte (vehiculo,marca,ano) values("Camioneta","Ford",2005);
insert into transporte (vehiculo,marca,ano) values("moto","GN",2012);

insert into persona (transporte,nombre,apellido,cedula,fecha_nac,telefono,sexo,profesion,municipio,direccion) 
values(1,"Maria","Ramirez","V14234567","1978/07/04","NS","Femenino","Docente","San Cristobal","Santa Teresa");

insert into persona (transporte,nombre,apellido,cedula,fecha_nac,telefono,sexo,profesion,municipio,direccion) 
values(2,"Ana","Martinez","V1445555","1980/06/05","NS","Femenino","Docente","San Antonio","Santa Teresa");

insert into persona (transporte,nombre,apellido,cedula,fecha_nac,telefono,sexo,profesion,municipio,direccion) 
values(2,"Carlos","Perez","V1445555","1980/06/05","NS","Masculino","Docente","San Antonio","Santa Teresa");

