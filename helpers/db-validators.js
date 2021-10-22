const Role = require('../models/role');
const { Usuario, Categoria, Producto } = require('../models');

const esRoleValido = async (role = '') => {
    const existeRole = await Role.findOne({ role });
    if ( !existeRole ) {
        throw new Error(`El rol ${ role } no está registrado en la BD`)
    }
}

const existeEmail = async ( correo = '' ) => {
    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo } ya está registrado`);
    }
}

const existeUsuarioPorId = async ( id ) => {
    
    const existeUsuario = await Usuario.findById( id );
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existeCategoriaPorId = async ( id ) => {
    
    const existeCategoria = await Categoria.findById( id );
    if ( !existeCategoria ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existeProductoPorId = async ( id ) => {
    
    const existeProducto = await Producto.findById( id );
    if ( !existeProducto ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const coleccionesPermitidas = ( coleccion = '', colecciones = [] ) => {

    const incluida = colecciones.includes( coleccion );
    if ( !incluida ) {
        throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
    }

    return true;
}

module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas
}