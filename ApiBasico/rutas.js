const router = require('express').Router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
//get equipos
router.get('/',(req, res)=>{
    let sql ='select persona.id, persona.nombre,persona.apellido,persona.cedula,persona.fecha_nac,persona.telefono,persona.sexo,persona.profesion,persona.municipio,persona.direccion ,transporte.vehiculo,transporte.marca,transporte.ano FROM persona  INNER JOIN transporte ON (persona.transporte = transporte.id)  '
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{ 
          //  console.log(rows);
            res.json(rows)
        }
    })

})

// get un equipo
router.get('/:id',(req, res)=>{
    const {id} = req.params
   let sql =`select persona.id, persona.nombre,persona.apellido,persona.cedula,persona.fecha_nac,persona.telefono,persona.sexo,persona.profesion,persona.municipio,persona.direccion ,transporte.vehiculo,transporte.marca,transporte.ano FROM persona  INNER JOIN transporte ON (persona.transporte = transporte.id) and persona.id ='${id}' `
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{ 
            res.json(rows)

        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
     const{nombre, apellido,cedula,fecha_nac,telefono,sexo,profesion,municipio,
        direccion,vehiculo,marca,ano} = req.body

/*
    let sql = `insert into transporte(nombre, apellido, cedula, fecha_nac,telefono
    ,sexo, profesion, municipio, direccion, vehiculo, marca, ano
    ) values('${nombre}','${apellido}','${cedula}','${fecha_nac}','${telefono}',
    '${sexo}','${profesion}','${municipio}','${direccion}','${vehiculo}','${marca}'
    ,'${ano}')`
*/
  let sql = `insert into transporte( vehiculo, marca, ano
    ) values('${vehiculo}','${marca}' ,'${ano}')`



    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})

 let sql2 = `select id from transporte where id = (select MAX(id) from transporte)`
conexion.query(sql2, (err, rows, fields)=>{
        if(err) throw err
                else{
              console.log(rows);
               console.log(rows[0]);
                console.log(rows[0].id);
             var es=rows[0].id;
             console.log(es);

 let sql3 = `insert into persona(transporte, nombre, apellido, cedula, fecha_nac,telefono
    ,sexo, profesion, municipio, direccion
    ) values('${es}','${nombre}','${apellido}','${cedula}','${fecha_nac}','${telefono}',
    '${sexo}','${profesion}','${municipio}','${direccion}')`

            conexion.query(sql3, (err, rows, fields)=>{
                    if(err) throw err
                        else{

                            console.log("agregado correctamente")
                        }

                    })

                }
            })
        }
    })




})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from persona where id = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
});

//modificar

/* vehiculo='${vehiculo}',
                 marca ='${marca}',
                 ano ='${ano}'*/


router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, apellido,cedula,fecha_nac,telefono,sexo,profesion,municipio,
        direccion,vehiculo,marca,ano} = req.body

console.log(req.body);
    
    let sql = `
UPDATE
persona INNER JOIN transporte ON
persona.transporte = transporte.id
SET             persona.nombre ='${nombre}',
                persona.apellido='${apellido}',
                persona.cedula='${cedula}',
                persona.fecha_nac ='${fecha_nac}',
                persona.telefono='${telefono}',
                persona.sexo ='${sexo}',
                persona.profesion ='${profesion}',
                persona.municipio='${municipio}',
                direccion ='${direccion}',
                transporte.vehiculo='${vehiculo}',
                transporte.marca ='${marca}',
                transporte.ano ='${ano}'
          WHERE persona.id = ${id} ` 
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo modificado'})
        }
    })

})
//----------------------------------

module.exports = router