// para importar  todos los archivos


const  validarJWT  = require('../middlewares/validar-jwt');
const validaRol = require('../middlewares/validar-roles');
const  validationCampos  = require('../middlewares/validationCampos');


module.exports ={
    ...validarJWT,
    ...validaRol,
    ...validationCampos,
}