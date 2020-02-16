export class Mascota{
    _id : String;
    nombre : String;
    raza : String;
    sexo : String;
    nroPariciones : String;
    fNacimiento : String;
    foto : String;
    ubicacion : String;
    descripcion: String;
    pedigree : Boolean;
    amo : String;

    constructor( id: string) {
        this._id =  id;
    }
    
}