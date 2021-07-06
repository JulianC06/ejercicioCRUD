const {nombres} = require('../datos_nombres.json'); //destructure ecmascript6

module.exports = {
    obtenerNombres: (req,res)=>{
        res.json({nombres});
    },
    anadirNombre: (req,res)=>{
        const {nombre} = req.body;//del json nombres, pido nombre con req.body para no hacer req.body.nombre
        nombres.push({
            nombre,//se deja solamente un nombre para no repetir, se deja de hacer nombre:nombre ya que se llaman igual
            cod:nombres.length //para no tener que estar agregando el id, sino que se incremente automaticamente
        });
        res.json({
            'recibido':true,
            'mensaje':'se ha agregado correctamente'
        });
    },
    actualizarNombre: (req,res)=>{
        const {cod}=req.params;
        const {nombre}=req.body;
        nombres.forEach((nom,i)=>{
            if(nom.cod === Number(cod)){
                nom.nombre=nombre;
            }
        });
        res.json({
            'actualizado':true,
            'mensaje':'actualizado correctamente'
        });
    },
    borrarNombre:(req,res)=>{
        const {cod} = req.params;
        nombres.forEach((nombre, i)=>{
            if(nombre.cod === Number(cod)){
                nombres.splice(i,1);
            }
        });
        res.json({
            'eliminado':true,
            'mensaje':'eliminado correctamente'
        });
    }
};